import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 利用vite解决跨域
  server: {
    // 代理配置
    proxy: {
      // 以/api开头的请求，都是前端想去后端的请求
      '/api': {
        // 跨域是在浏览器环境下，同源策略的安全性
        target: 'http://localhost:3000',
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }

    }
  }
})
