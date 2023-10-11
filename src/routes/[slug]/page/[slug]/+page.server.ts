import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {convertMdToHtml, extractMetaDataFromMdPage} from "$lib/helpers";



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
