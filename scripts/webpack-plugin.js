class WindowsBuildFixPlugin {
  apply(compiler) {
    compiler.hooks.beforeCompile.tap('WindowsBuildFixPlugin', () => {
      const fs = require('fs');
      const path = require('path');
      
      const nextDir = path.join(compiler.options.context || process.cwd(), '.next');
      const serverDir = path.join(nextDir, 'server');
      const diagnosticsDir = path.join(nextDir, 'diagnostics');

      // Ensure directories exist
      [serverDir, diagnosticsDir].forEach(dir => {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
      });

      // Create files if they don't exist
      const files = [
        { path: path.join(serverDir, 'pages-manifest.json'), content: '{}' },
        { path: path.join(diagnosticsDir, 'build-diagnostics.json'), content: '{}' }
      ];

      files.forEach(({ path: filePath, content }) => {
        try {
          if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, content, 'utf8');
          }
        } catch (err) {
          // Ignore errors
        }
      });
    });
  }
}

module.exports = WindowsBuildFixPlugin;

