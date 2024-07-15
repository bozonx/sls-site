import type {PageLoad} from './$types'
import {loadListItems} from '$lib/requests'


export const load: PageLoad = async (event) => {
  return loadListItems(
      event,
      `/api/1/seasons/${event.params.lang}/${event.params.season}/${event.params.page || 1}`
  )
}
