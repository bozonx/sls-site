import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {convertMdToHtml, curLang, extractMetaDataFromMdPage} from "$lib/helpers";
import {getBlogPage} from '$lib/server/getPage';



export const load: PageServerLoad = async (event) => {
  const lang = curLang(event.url.pathname)
  let rawContent: string

  try {
    rawContent = await getBlogPage(lang, event.params.slug)
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
