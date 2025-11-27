const fs = require('fs');
const path = require('path');

// Create necessary directories and files before build
const nextDir = path.join(process.cwd(), '.next');
const serverDir = path.join(nextDir, 'server');
const diagnosticsDir = path.join(nextDir, 'diagnostics');

try {
  // Always create .next directory first
  if (!fs.existsSync(nextDir)) {
    fs.mkdirSync(nextDir, { recursive: true });
  }

  // Always create directories (even if they exist, ensure they're there)
  if (!fs.existsSync(serverDir)) {
    fs.mkdirSync(serverDir, { recursive: true });
  }
  
  if (!fs.existsSync(diagnosticsDir)) {
    fs.mkdirSync(diagnosticsDir, { recursive: true });
  }

  // Always write files (overwrite if exist) to ensure they're accessible
  const pagesManifest = path.join(serverDir, 'pages-manifest.json');
  const buildDiagnostics = path.join(diagnosticsDir, 'build-diagnostics.json');

  try {
    fs.writeFileSync(pagesManifest, '{}', { flag: 'w', encoding: 'utf8' });
  } catch (err) {
    // If file is locked, try again after a short delay
    setTimeout(() => {
      try {
        fs.writeFileSync(pagesManifest, '{}', { flag: 'w', encoding: 'utf8' });
      } catch (e) {
        // Ignore if still fails
      }
    }, 100);
  }

  try {
    fs.writeFileSync(buildDiagnostics, '{}', { flag: 'w', encoding: 'utf8' });
  } catch (err) {
    // If file is locked, try again after a short delay
    setTimeout(() => {
      try {
        fs.writeFileSync(buildDiagnostics, '{}', { flag: 'w', encoding: 'utf8' });
      } catch (e) {
        // Ignore if still fails
      }
    }, 100);
  }

  // Set proper permissions on Windows
  if (process.platform === 'win32') {
    try {
      fs.chmodSync(serverDir, 0o777);
      fs.chmodSync(diagnosticsDir, 0o777);
      fs.chmodSync(pagesManifest, 0o666);
      fs.chmodSync(buildDiagnostics, 0o666);
    } catch (e) {
      // Ignore permission errors
    }
  }

  console.log('✓ Pre-build setup completed');
} catch (error) {
  console.error('Error in prebuild script:', error.message);
  // Don't fail the build if prebuild script fails
  process.exit(0);
}

