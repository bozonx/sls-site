import { error } from '@sveltejs/kit';
import type {PageLoad} from './$types';
import {SUPPORTED_LANGS} from '../../lib/constants';


export const load: PageLoad = (event) => {
  if (!SUPPORTED_LANGS.includes(event.params.lang)) {

    // TODO: поидее можно просто делать запрос данных и если вернут 404 то ошибка
    // TODO: translate !!!

    throw error(404, 'Not found')
  }
};
