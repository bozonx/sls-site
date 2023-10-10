import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import fs from 'node:fs/promises'
import path from 'path'
import {convertMdToHtml, extractMetaDataFromMdPage} from "$lib/helpers";
import {SRC_ROOT_PATH} from "$lib/constants";


// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


export const load: PageServerLoad = async ({ params }) => {
  const fullFilePath = path.resolve(
      SRC_ROOT_PATH,
      `../texts/ru/blog/${params.slug}.md`
  )
  let rawContent

  try {
    rawContent = await fs.readFile(fullFilePath, 'utf8')
    //rawContent = await import(fullFilePath)
  }
  catch (e) {

    // TODO: use translate

    throw error(404, 'Not found');
  }

  const [meta, md] = extractMetaDataFromMdPage(rawContent)

  return {
    meta,
    html: convertMdToHtml(md)
  }
}
