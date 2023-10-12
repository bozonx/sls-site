import type {PageLoad} from './$types'
import {loadParsedPage} from '$lib/requests'


export const load: PageLoad = async (event) => {
  return await loadParsedPage(event, 'blog')
}
