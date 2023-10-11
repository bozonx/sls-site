import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (event) => {
  if (event.url.pathname === '/') {

    // TODO: resolve lang !!!

    throw redirect(307, '/en')
  }
};
