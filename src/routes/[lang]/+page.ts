// import {error, redirect} from '@sveltejs/kit';
// import type {PageLoad} from './$types';
// import {DEFAULT_LANG, SUPPORTED_LANGS} from '../../lib/constants';
//
//
// export const load: PageLoad = (event) => {
//   if (!SUPPORTED_LANGS.includes(event.params.lang)) {
//
//     // TODO: поидее можно просто делать запрос данных и если вернут 404 то ошибка
//     // TODO: translate !!!
//
//     //throw error(404, 'Not found')
//
//     throw redirect(307, `/${DEFAULT_LANG}`)
//   }
// }
