import type {PageLoad} from './$types'
import {loadJustData} from '$lib/requests'


export const load: PageLoad = async (event) => {
  return await loadJustData(event, `/api/1/seasons/${event.params.lang}`)
}
