import type {PageLoad} from './$types'
import {loadParsedPage, loadJustData} from '$lib/requests'
import {BLOG_DIR} from '$lib/constants';


export const load: PageLoad = async (event) => {
  const page = await loadParsedPage(event, BLOG_DIR)
  const similar =  loadJustData(
      event,
      `/api/1/similar/${event.params.lang}/${event.params.file}`
  )

  return {
    page,
    similar,
  }
}
