# Cleanup script for Lighthouse Chrome processes and temp files on Windows
# This script handles the EBUSY error by forcefully terminating Chrome processes
# and cleaning up temporary files before they can be locked

Write-Host "Starting Lighthouse cleanup..." -ForegroundColor Yellow

# Function to kill Chrome processes with retry
function Stop-ChromeProcesses {
    $maxRetries = 3
    $retryCount = 0
    
    while ($retryCount -lt $maxRetries) {
        try {
            $chromeProcesses = Get-Process -Name "chrome*" -ErrorAction SilentlyContinue
            if ($chromeProcesses) {
                Write-Host "Found $($chromeProcesses.Count) Chrome process(es). Terminating..." -ForegroundColor Cyan
                $chromeProcesses | Stop-Process -Force -ErrorAction SilentlyContinue
                Start-Sleep -Seconds 2
            } else {
                Write-Host "No Chrome processes found." -ForegroundColor Green
                break
            }
        } catch {
            Write-Host "Attempt $($retryCount + 1) failed: $($_.Exception.Message)" -ForegroundColor Red
        }
        $retryCount++
        if ($retryCount -lt $maxRetries) {
            Start-Sleep -Seconds 1
        }
    }
}

# Function to clean up Lighthouse temp directories
function Remove-LighthouseTempFiles {
    try {
        $tempPath = "$env:LOCALAPPDATA\Temp\lighthouse.*"
        $lighthouseDirs = Get-ChildItem -Path "$env:LOCALAPPDATA\Temp" -Directory -Filter "lighthouse.*" -ErrorAction SilentlyContinue
        
        if ($lighthouseDirs) {
            Write-Host "Found $($lighthouseDirs.Count) Lighthouse temp director(ies). Removing..." -ForegroundColor Cyan
            foreach ($dir in $lighthouseDirs) {
                try {
                    Remove-Item -Path $dir.FullName -Recurse -Force -ErrorAction SilentlyContinue
                    Write-Host "Removed: $($dir.FullName)" -ForegroundColor Green
                } catch {
                    Write-Host "Failed to remove: $($dir.FullName) - $($_.Exception.Message)" -ForegroundColor Yellow
                }
            }
        } else {
            Write-Host "No Lighthouse temp directories found." -ForegroundColor Green
        }
    } catch {
        Write-Host "Error cleaning temp files: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Execute cleanup
Stop-ChromeProcesses
Remove-LighthouseTempFiles

# Wait a moment for file handles to be released
Start-Sleep -Seconds 1

Write-Host "Lighthouse cleanup completed." -ForegroundColor Green

