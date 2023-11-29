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
        './LoginRoutes': './src/routes/Routes',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
