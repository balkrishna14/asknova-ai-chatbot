import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/asknova-ai-chatbot/",
  plugins: [react()],
})