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
        '/sitemap.xml',
        '/site-map',

        ...pagesUrls,

        '/',
        //'*',
      ],

      crawl: true,
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      handleEntryGeneratorMismatch: 'warn',

    },

    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },

  paths: { base: process.argv.includes('dev') ? '' : 'https://bozonx8.github.io/sls-site' },
  //  process.env.BASE_PATH

  //concurrency: 3,


};

export default config;
