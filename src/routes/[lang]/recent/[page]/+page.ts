import { error } from '@sveltejs/kit';
import type {PageLoad} from './$types';


export const load: PageLoad = async (event) => {
  let response

  if (!Number.isInteger(Number(event.params.page))) {
    throw error(400, 'Wrong page param')
  }

  response = await event.fetch(`/api/1/recent/${event.params.lang}/${event.params.page}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status >= 400) {
    throw error(response.status, response.statusText)
  }

  return await response.json()
}
