import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {convertMdToHtml, extractMetaDataFromMdPage} from "$lib/helpers";



export const prerender = true;
export const ssr = true


export const load: PageServerLoad = async (event) => {
  return {
    // meta,
    // html: convertMdToHtml(md)
  }
}
