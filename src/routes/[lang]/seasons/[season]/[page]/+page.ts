import type {PageLoad, EntryGenerator} from './$types'
import {loadListItems} from '$lib/requests'
import {SUPPORTED_LANGS} from '$lib/constants';

// export const entries: EntryGenerator = async () => {
//   const res: {lang: string, season: string, page: string}[] = []
//
//   for (const lang of SUPPORTED_LANGS) {
//
//   }
//
//   return res
//   //return [{ season: 'hello-world' }];
// };


export const load: PageLoad = async (event) => {
  return loadListItems(
      event,
      `/api/1/seasons/${event.params.lang}/${event.params.season}/${event.params.page || 1}`
  )
}
