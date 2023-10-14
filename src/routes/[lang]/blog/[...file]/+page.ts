import type {PageLoad} from './$types'
import {loadParsedPage, loadJustData} from '$lib/requests'


export const load: PageLoad = async (event) => {
  const page = await loadParsedPage(event, 'blog')
  const similar =  loadJustData(
      event,
      `/api/1/similar/${event.params.lang}/${event.params.file}`
  )

  return {
    page,
    similar,
  }
}
