import { redirect } from '@sveltejs/kit';
import type {PageLoad} from './$types';


export const load: PageLoad = (event) => {
  if (event.url.pathname === '/') {

    // TODO: resolve lang !!!

    throw redirect(307, '/en')
  }
};
