# Troubleshooting Guide

## Windows-Specific Issues

### EBUSY: resource busy or locked Error During Lighthouse Tests

**Problem**: When running Lighthouse tests on Windows, you may encounter an error like:
```
Error: EBUSY: resource busy or locked, unlink 'C:\Users\...\lighthouse.*\Default\Account Web Data'
```

**Root Cause**: This occurs because Chrome processes launched by Lighthouse don't always terminate cleanly on Windows, leaving file handles open. When Node.js tries to clean up temporary directories using its internal `rimraf` function, it encounters locked files.

**Solution**: We've implemented a comprehensive fix that includes:

1. **Chrome Flags Configuration**: Added specific Chrome flags in `.lighthouserc.js` to improve process isolation:
   - `--single-process`: Forces Chrome to run in single-process mode
   - `--no-sandbox`: Disables Chrome's sandbox for cleaner shutdown
   - `--disable-dev-shm-usage`: Prevents shared memory issues
   - Additional flags for background process management

2. **PowerShell Cleanup Scripts**:
   - `scripts/cleanup-lighthouse.ps1`: Forcefully terminates Chrome processes and cleans temp directories
   - `scripts/test-lighthouse.ps1`: Robust wrapper that handles pre/post-test cleanup

3. **Enhanced Process Management**:
   - Automatic Chrome process detection and termination
   - Retry logic for stubborn processes
   - Temporary directory cleanup with error handling

**Usage**:
```bash
# Run Lighthouse tests with automatic cleanup
npm run test:lighthouse

# Manual cleanup if needed
powershell -ExecutionPolicy Bypass -File ./scripts/cleanup-lighthouse.ps1
```

**Prevention**:
- Always use the provided npm scripts instead of running `lhci` directly
- Ensure your development server is running before starting tests
- The scripts will automatically handle cleanup before and after tests

### File Permission Issues

If you encounter permission errors when running the PowerShell scripts:

1. **Temporary Fix**: Run PowerShell as Administrator
2. **Permanent Fix**: Set execution policy for current user:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

### Port Already in Use

If port 3000 is already in use:

1. **Find the process**:
   ```powershell
   netstat -ano | findstr :3000
   ```

2. **Kill the process** (replace PID with actual process ID):
   ```powershell
   taskkill /PID <PID> /F
   ```

## General Issues

### Build Failures

If you encounter TypeScript or build errors:

1. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run build
   ```

2. **Clear node_modules**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Lighthouse Score Issues

If Lighthouse scores are lower than expected:

1. **Check server performance**: Ensure your dev server isn't under load
2. **Review thresholds**: Check `.lighthouserc.js` assertion values
3. **Run in production mode**: Use `npm run build && npm run start` before testing

## Getting Help

If none of these solutions work:

1. Check the console output for specific error messages
2. Ensure all dependencies are properly installed
3. Verify that your Node.js version is compatible (v18+ recommended)
4. Run the cleanup script manually and try again

For persistent issues, please include:
- Your operating system and version
- Node.js and npm versions
- Complete error output
- Steps to reproduce the issue

