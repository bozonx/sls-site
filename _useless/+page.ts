import {redirect} from '@sveltejs/kit';
import type {PageLoad} from './$types';


// redirect to the first page
export const load: PageLoad = (event) => {
  throw redirect(307, event.url.pathname + '/1')
};
