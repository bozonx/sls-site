import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import {getAllThePagesUrls} from "./src/lib/server/getAllThePagesUrls.js";
import path from "path";


const pagesUrls = getAllThePagesUrls()


/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],

  customVariables: {
    myCustomVariable: 'my custom value',
  },

  kit: {
    // alias: {
    //   's': path.resolve('.')
    // },
    prerender: {
      entries: [
        ...pagesUrls,
        '*',
      ],
    },

    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },
  paths: { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH }
};

export default config;
