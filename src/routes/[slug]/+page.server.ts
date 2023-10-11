import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {curLang} from '../../lib/helpers';


export const load: PageServerLoad = (event) => {
  if (!curLang(event.url.pathname)) {

    // TODO: translate !!!

    throw error(404, 'Not found')
  }
};
