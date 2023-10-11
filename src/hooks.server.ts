import { prepareStylesSSR } from '@svelteuidev/core';
import type { Handle } from '@sveltejs/kit';
import {acceptLangHeaderToLand} from '$lib/helpers';


export const handle: Handle = (params) => {
  prepareStylesSSR(params)

  const acceptLang = params.event.request.headers
      .get('accept-language') || undefined
  const lang = acceptLangHeaderToLand(acceptLang)

  return params.resolve(params.event, {
    transformPageChunk: ({ html }) => html.replace(
        '%lang%',
        lang
    ),
  });
};
