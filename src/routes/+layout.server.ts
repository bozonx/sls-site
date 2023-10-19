import { redirect } from '@sveltejs/kit';
import type {LayoutServerLoad, LayoutServerLoadEvent} from './$types';
import {acceptLangHeaderToLand} from '$lib/helpers';


export const load: LayoutServerLoad = (event: LayoutServerLoadEvent) => {
  if (event.url.pathname === '/') {
    const acceptLang = event.request.headers
      .get('accept-language') || undefined
    const lang = acceptLangHeaderToLand(acceptLang)

    throw redirect(307, '/' + lang)
  }
}
