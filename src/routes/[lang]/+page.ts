import { error } from '@sveltejs/kit';
import type {PageLoad} from './$types';
import {SUPPORTED_LANGS} from '../../lib/constants';


export const load: PageLoad = (event) => {
  if (!SUPPORTED_LANGS.includes(event.params.lang)) {

    // TODO: translate !!!

    throw error(404, 'Not found')
  }
};
