import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    root: '.',
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@mabesi/react-components': path.resolve(__dirname, '../src'),
            react: path.resolve(__dirname, '../node_modules/react'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
        },
    },
    base: process.env.GITHUB_PAGES ? '/react-components/' : '/',
});
