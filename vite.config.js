import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // 这里你可以根据需要定义别名
      '@components': '/src/components',
      '@utils': '/src/utils',
      // 添加更多别名...
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
})
