import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    root: '.',
    build: {
        outDir: 'example-dist',
    },
    server: {
        port: 3000,
        open: '/example.html',
    },
    resolve: {
        alias: {
            '@mabesi/react-components': resolve(__dirname, './src'),
        },
    },
});
