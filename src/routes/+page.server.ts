import { redirect } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {acceptLangHeaderToLand} from '$lib/helpers';


// TODO: что быстрее сработает это или в лэйаут???
export const load: PageServerLoad = (event) => {
  const acceptLang = event.request.headers
      .get('accept-language') || undefined
  const lang = acceptLangHeaderToLand(acceptLang)

  if (event.url.pathname === '/') {
    throw redirect(307, '/' + lang)
  }
}
