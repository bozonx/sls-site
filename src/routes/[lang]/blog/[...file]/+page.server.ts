import {get} from 'svelte/store';
import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {convertMdToHtml, extractMetaDataFromMdPage} from "$lib/helpers";
import {getBlogPage} from '$lib/server/getPage';
import {lang} from '$lib/store/lang';


export const load: PageServerLoad = async (event) => {
  let rawContent: string

  try {
    rawContent = await getBlogPage(get(lang), event.params.file)
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
