import type {PageLoad} from './$types'
import {loadParsedPage} from '$lib/requests'
import {PAGE_DIR} from '$lib/constants';


export const load: PageLoad = async (event) => {
  return (await loadParsedPage(event, PAGE_DIR)).result
}
