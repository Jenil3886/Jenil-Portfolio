# Build Error Fix Guide (Windows)

## Problem
Build fails with error: `UNKNOWN: unknown error, open '.next\server\pages-manifest.json'`

This is a **Windows file system permission issue**, not a code problem.

## ✅ Quick Solutions

### Option 1: Use PowerShell Script (Recommended)
```powershell
.\build-fix.ps1
```

### Option 2: Use Batch File
```cmd
build.bat
```

### Option 3: Manual Command (Copy-Paste)
```powershell
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; New-Item -ItemType Directory -Path ".next\server" -Force | Out-Null; New-Item -ItemType Directory -Path ".next\diagnostics" -Force | Out-Null; [System.IO.File]::WriteAllText("$PWD\.next\server\pages-manifest.json", "{}"); [System.IO.File]::WriteAllText("$PWD\.next\diagnostics\build-diagnostics.json", "{}"); $env:NEXT_TELEMETRY_DISABLED="1"; npm run build
```

## 🔧 Permanent Fix (One-Time Setup)

### Add Folder to Windows Defender Exclusion

1. Open **Windows Security** → **Virus & threat protection**
2. Click **Manage settings** (under Virus & threat protection settings)
3. Scroll down to **Exclusions** → Click **Add or remove exclusions**
4. Click **Add an exclusion** → Select **Folder**
5. Browse and select: `D:\Jenil Gajera\Jenil-Portfolio`
6. Click **Select Folder**

**After this, `npm run build` will work without errors!**

## 🚀 Alternative: Deploy to Netlify/Vercel

The build works perfectly on Netlify/Vercel servers. You don't need to build locally for production:

1. Push code to GitHub
2. Connect to Netlify/Vercel
3. Build happens automatically on their servers (no Windows issues!)

## 📝 Notes

- Your code is correct - this is purely a Windows file permission issue
- Prebuild script runs automatically but Windows still blocks file access
- Local build is only needed for testing - production builds work fine on Netlify/Vercel

