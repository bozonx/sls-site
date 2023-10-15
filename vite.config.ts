import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools'
import path from 'path';


export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools(),
	],
	define: {
		'__CONF__': JSON.stringify({
			rootDir: path.resolve('.')}
		),
	},
})
