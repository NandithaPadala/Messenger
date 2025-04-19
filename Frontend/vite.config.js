import tailwindcss from '@tailwindcss/vite'; // Ensure the Vite plugin is used
import react from '@vitejs/plugin-react'; // If you're using React
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
