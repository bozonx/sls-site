import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";
import path from 'path';


export default defineConfig({
	plugins: [
		sveltekit(),
		precompileIntl("locales"),
	],
	define: {
		'__CONF__': JSON.stringify({
			rootDir: path.resolve('.')}
		),
	},
})
