import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig(({ mode }) => {
	const ENV = loadEnv(mode, __dirname, '');

    return {
        root: 'web',
        plugins: [
            vue({
                isProduction: mode === 'production',
            }),
        ],
        resolve: {
            alias: {
                '@': 'web/app',
                '~': 'web/app',
            },
        },
        build: {
            outDir: resolve('build'),
        },
    };
});
