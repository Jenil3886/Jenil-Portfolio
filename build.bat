@echo off
echo ========================================
echo   Portfolio Build Script (Windows)
echo ========================================
echo.

echo [1/4] Cleaning .next folder...
if exist ".next" (
    rmdir /s /q ".next" 2>nul
)
timeout /t 1 /nobreak >nul

echo [2/4] Creating directory structure...
if not exist ".next" mkdir ".next"
if not exist ".next\server" mkdir ".next\server"
if not exist ".next\diagnostics" mkdir ".next\diagnostics"

echo [3/4] Creating required files...
echo {} > ".next\server\pages-manifest.json" 2>nul
echo {} > ".next\diagnostics\build-diagnostics.json" 2>nul

set NEXT_TELEMETRY_DISABLED=1
echo [4/4] Starting Next.js build...
echo.

call npm run build -- --no-lint

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   Build completed successfully!
    echo ========================================
) else (
    echo.
    echo ========================================
    echo   Build failed. Try running as Administrator.
    echo ========================================
)

pause

