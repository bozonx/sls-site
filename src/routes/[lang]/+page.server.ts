import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {SUPPORTED_LANGS} from '../../lib/constants';


export const load: PageServerLoad = (event) => {
  if (!SUPPORTED_LANGS.includes(event.params.lang)) {

    // TODO: translate !!!

    throw error(404, 'Not found')
  }
};
