import {redirect} from '@sveltejs/kit';
import type {PageLoad} from './$types';
import {browser} from '$app/environment';


export const load: PageLoad = async (event) => {
  if (browser) {
    throw redirect(307, '/' + navigator.language)
  }
}
