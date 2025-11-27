# Build fix script for Windows
Write-Host "Cleaning .next folder..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
}
Start-Sleep -Seconds 2

Write-Host "Creating directory structure..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path ".next\server" -Force | Out-Null
New-Item -ItemType Directory -Path ".next\static" -Force | Out-Null
New-Item -ItemType Directory -Path ".next\diagnostics" -Force | Out-Null

# Pre-create files to avoid Windows file system issues
[System.IO.File]::WriteAllText("$PWD\.next\server\pages-manifest.json", "{}")
[System.IO.File]::WriteAllText("$PWD\.next\diagnostics\build-diagnostics.json", "{}")

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
    Write-Host "Solutions:" -ForegroundColor Yellow
    Write-Host "1. Add project folder to Windows Defender exclusions" -ForegroundColor Cyan
    Write-Host "2. Run PowerShell as Administrator" -ForegroundColor Cyan
    Write-Host "3. Deploy directly to Netlify/Vercel" -ForegroundColor Cyan
}
