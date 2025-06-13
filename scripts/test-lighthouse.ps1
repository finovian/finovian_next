# Robust Lighthouse test wrapper for Windows
# This script ensures proper startup and cleanup of the development server and Chrome processes

Write-Host "Starting Lighthouse test wrapper..." -ForegroundColor Yellow

# Function to check if port is in use
function Test-Port {
    param([int]$Port)
    try {
        $connection = New-Object System.Net.Sockets.TcpClient
        $connection.Connect("localhost", $Port)
        $connection.Close()
        return $true
    } catch {
        return $false
    }
}

# Function to wait for server to be ready
function Wait-ForServer {
    param([int]$Port = 3000, [int]$MaxWait = 60)
    $waited = 0
    Write-Host "Waiting for server on port $Port..." -ForegroundColor Cyan
    
    while ($waited -lt $MaxWait) {
        if (Test-Port -Port $Port) {
            Write-Host "Server is ready on port $Port" -ForegroundColor Green
            return $true
        }
        Start-Sleep -Seconds 2
        $waited += 2
        Write-Host "Still waiting... ($waited/$MaxWait seconds)" -ForegroundColor Yellow
    }
    
    Write-Host "Server failed to start within $MaxWait seconds" -ForegroundColor Red
    return $false
}

# Cleanup before starting
Write-Host "Pre-test cleanup..." -ForegroundColor Cyan
& "$PSScriptRoot\cleanup-lighthouse.ps1"

# Check if dev server is running
if (!(Test-Port -Port 3000)) {
    Write-Host "Development server not running. Please start it with 'npm run dev' first." -ForegroundColor Red
    exit 1
}

# Wait a moment for server to be fully ready
Start-Sleep -Seconds 3

try {
    Write-Host "Running Lighthouse tests..." -ForegroundColor Green
    
    # Run lighthouse with error handling
    $env:NODE_OPTIONS = "--max-old-space-size=4096"
    & npx lhci autorun
    $lighthouseExitCode = $LASTEXITCODE
    
    if ($lighthouseExitCode -eq 0) {
        Write-Host "Lighthouse tests completed successfully!" -ForegroundColor Green
    } else {
        Write-Host "Lighthouse tests failed with exit code: $lighthouseExitCode" -ForegroundColor Red
    }
    
} catch {
    Write-Host "Error running Lighthouse: $($_.Exception.Message)" -ForegroundColor Red
    $lighthouseExitCode = 1
} finally {
    # Always cleanup after tests
    Write-Host "Post-test cleanup..." -ForegroundColor Cyan
    Start-Sleep -Seconds 2
    & "$PSScriptRoot\cleanup-lighthouse.ps1"
}

# Wait a moment for cleanup to complete
Start-Sleep -Seconds 1
Write-Host "Lighthouse test wrapper completed." -ForegroundColor Yellow
exit $lighthouseExitCode

