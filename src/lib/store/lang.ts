import {writable} from 'svelte/store';
import {page} from "$app/stores";


export const lang = writable('')

page.subscribe((value: any) => {
  //pageVal = value
  lang.set(value.params.lang)
})
