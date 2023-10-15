import {error, redirect} from '@sveltejs/kit';
import type {PageLoad} from './$types';
import {DEFAULT_LANG, SUPPORTED_LANGS} from '../../lib/constants';
import {loadJustData} from '../../lib/requests';


export const load: PageLoad = async (event) => {
  const rawContent = await loadJustData(
    event,
    `/api/1/page/${event.params.lang}/main`
  )

  return {
    result: JSON.parse(rawContent.result),
  }

  // if (!SUPPORTED_LANGS.includes(event.params.lang)) {
  //
  //   // TODO: поидее можно просто делать запрос данных и если вернут 404 то ошибка
  //   // TODO: translate !!!
  //
  //   //throw error(404, 'Not found')
  //
  //   throw redirect(307, `/${DEFAULT_LANG}`)
  //}
}
