import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import {getAllThePagesUrls} from "./src/lib/server/getAllThePagesUrls.js";
import {convertPageImagesSync} from "./src/lib/server/convertPageImages.js";
import {fileURLToPath} from "node:url";
import path from "node:path";


const filename = fileURLToPath(import.meta.url);
const myDirname = path.dirname(filename)

convertPageImagesSync(myDirname)

const pagesUrls = getAllThePagesUrls()


/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],

  kit: {
    prerender: {
      entries: [
        //...pagesUrls,
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
      strict: false,
    }),
  },

  paths: { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH },

  concurrency: 3,
};

export default config;
