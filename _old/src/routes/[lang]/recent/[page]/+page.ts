import type {PageLoad} from './$types'
import {loadListItems} from '$lib/requests'


export const load: PageLoad = async (event) => {
  return loadListItems(
      event,
      `/api/1/recent/${event.params.lang}/${event.params.page}`
  )
}
