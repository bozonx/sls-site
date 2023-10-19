import { redirect } from '@sveltejs/kit';
import type {PageServerLoad, PageServerLoadEvent} from './$types';
import {acceptLangHeaderToLand} from '$lib/helpers';

export const prerender = true
export const ssr = true


export const load: PageServerLoad = (event: PageServerLoadEvent) => {
  if (event.url.pathname === '/') {
    const acceptLang = event.request.headers
      .get('accept-language') || undefined
    const lang = acceptLangHeaderToLand(acceptLang)

    throw redirect(307, '/' + lang)
  }
}
