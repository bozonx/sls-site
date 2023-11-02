import type {PageLoad} from './$types'
import {loadListItems} from '$lib/requests'


export const load: PageLoad = async (event) => {
  // return {
  //   result: [
  //     {
  //       name: 'some', title: 'aaa', dateLocal: '2022', tags: [], descr: 'sdf'
  //     }
  //   ]
  // }

  return loadListItems(
    event,
    `/api/1/tag/${event.params.lang}/${event.params.tag}/${event.params.page}`
  )
}
