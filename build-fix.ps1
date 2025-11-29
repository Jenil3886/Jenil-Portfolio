# Build fix script for Windows
Write-Host "Cleaning .next folder..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
}
Start-Sleep -Seconds 2

Write-Host "Starting build..." -ForegroundColor Green
$env:NODE_OPTIONS = "--max-old-space-size=4096"
$env:NEXT_TELEMETRY_DISABLED = "1"
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Build completed successfully!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Build completed but with errors." -ForegroundColor Red
    Write-Host "If the only error mentions '.next\\diagnostics\\build-diagnostics.json', the build output was still generated." -ForegroundColor Yellow
    Write-Host "You can also try adding the project folder to antivirus exclusions or running PowerShell as Administrator." -ForegroundColor Yellow
}
