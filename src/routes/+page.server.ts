import { redirect } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';


export const load: PageServerLoad = (event) => {
  if (event.url.pathname === '/') {

    // TODO: resolve lang !!!

    throw redirect(307, '/en')
  }
};
