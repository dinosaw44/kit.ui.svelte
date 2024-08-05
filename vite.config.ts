import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['/Users/admin/@dinosaw44/kit.ui.svelte/.config/'],
    },
  },
})
