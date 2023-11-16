import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'loginApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Login': './src/pages/Login',
        './LoginPage2': './src/pages/LoginPage2',
        './AuthStore': './src/utils/AuthStore',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //         @import '../node_modules/lh-my-first-storybook/dist/styles/_variables.scss';
  //         `,
  //     },
  //   },
  // },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
