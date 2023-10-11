import { prepareStylesSSR } from '@svelteuidev/core';
import type { Handle } from '@sveltejs/kit';
//import { locale } from 'svelte-i18n'
import {acceptLangHeaderToLand} from '$lib/helpers';


export const handle: Handle = (params) => {
  prepareStylesSSR(params)

  const acceptLang = params.event.request.headers
      .get('accept-language') || undefined
  const lang = acceptLangHeaderToLand(acceptLang)

  //locale.set(lang)

  return params.resolve(params.event, {
    transformPageChunk: ({ html }) => html.replace(
        '%lang%',
        lang
    ),
  });
};
