import { defineConfig } from 'tsup';

export default defineConfig([
    // CJS and ESM builds (for npm package usage)
    {
        entry: ['src/index.tsx'],
        format: ['cjs', 'esm'],
        dts: true,
        splitting: false,
        sourcemap: true,
        clean: true,
        minify: true,
        external: ['react', 'react-dom'],
        treeshake: true,
        outDir: 'dist',
        injectStyle: false,
        esbuildOptions(options) {
            options.banner = {
                js: '"use client"',
            };
        },
    },
    // IIFE build (for browser usage in examples)
    {
        entry: ['src/index.tsx'],
        format: ['iife'],
        splitting: false,
        sourcemap: true,
        minify: true,
        external: ['react', 'react-dom'],
        globalName: 'MabesiReactComponents',
        outDir: 'dist',
        injectStyle: false,
        esbuildOptions(options) {
            options.globalName = 'MabesiReactComponents';
            options.footer = {
                js: '// MabesiReactComponents IIFE bundle',
            };
        },
    },
]);
