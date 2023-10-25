import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// server: { host: '10.0.0.179' },
	plugins: [sveltekit()],
});
