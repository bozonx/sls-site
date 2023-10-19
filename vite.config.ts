import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
//import {SvelteKitPWA} from '@vite-pwa/sveltekit';


export default defineConfig({
	plugins: [
		sveltekit(),
		// SvelteKitPWA({
		// 	strategies: 'injectManifest',
		// 	srcDir: 'src',
		// })
	],
	define: {
		'__CONF__': JSON.stringify({
			rootDir: path.resolve('.')}
		),
	},
})
