import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";
import path from 'path';


export default defineConfig({
	plugins: [
		sveltekit(),
		ViteYaml(),
		precompileIntl("locales"),
	],
	define: {
		'__CONF__': JSON.stringify({rootDir: path.resolve('.')}),
	},
})
