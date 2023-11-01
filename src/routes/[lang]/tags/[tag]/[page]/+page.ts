import type {PageLoad} from './$types'
import {loadListItems} from '$lib/requests'


export const load: PageLoad = async (event) => {
  // return {
  //   result: []
  // }

  return loadListItems(
    event,
    `/api/1/tag/${event.params.lang}/${event.params.tag}/${event.params.page}`
  )
}
