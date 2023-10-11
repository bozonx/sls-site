import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {convertMdToHtml, extractMetaDataFromMdPage} from "$lib/helpers";


// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = true


export const load: PageServerLoad = async (event) => {
  return {
    meta: {
      date: '2023-10-10',
      title: 'title',
      tags: ['tag1']
    },
    html: '<div>test</div>'
  }
}
