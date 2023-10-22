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
  preprocess: [vitePreprocess({})],

  kit: {
    appDir: 'app',
    prerender: {
      entries: [
        ...pagesUrls,
        '/sitemap.xml',
        '/',
      ],

      crawl: true,
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      handleEntryGeneratorMismatch: 'warn',

    },

    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),

    paths: {
      relative: false,
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },

    //target: "#svelte",
  },

  concurrency: 3,
};

export default config;
