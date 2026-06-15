import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'es2022',
  external: [
    '@earendil-works/*',       // All pi peer deps — provided at runtime via jiti virtualModules
    '@mariozechner/clipboard', // Native binary — transitive dep of pi-coding-agent, lazy-loaded with try/catch
    'node:*',                  // All Node.js builtins (fs, path, child_process, etc.)
  ],
  resolveExtensions: ['.ts', '.js', '.mjs', '.mts', '.json'],
  sourcemap: false,
  keepNames: true,
});
