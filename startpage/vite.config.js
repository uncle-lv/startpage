import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: '5000',
    proxy: {
      '/bili': {
        target: 'https://api.bilibili.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bili/, ''),
      },

      '/api': {
        target: 'https://cloudbase-prepaid-0ep3vhb1c36938-1256422595.ap-shanghai.app.tcloudbase.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
