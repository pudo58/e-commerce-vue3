import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        }
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    'vuetify': ['vuetify'],
                    'vuetify-css': ['vuetify/styles'],
                    'vuetify-mdi': ['@mdi/font/css/materialdesignicons.css'],
                    'vuetify-components': ['vuetify/components'],
                    'vuetify-directives': ['vuetify/directives'],
                }
            }
        },
        assetsDir: 'assets',
        cssCodeSplit: true,
    }
})
