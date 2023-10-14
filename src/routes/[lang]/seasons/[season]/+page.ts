import type {PageLoad} from './$types'
import {loadFullList} from '$lib/requests'


export const load: PageLoad = async (event) => {
  return loadFullList(
      event,
      `/api/1/seasons/${event.params.lang}/${event.params.season}`
  )
}
