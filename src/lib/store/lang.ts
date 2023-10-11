import {readable, writable} from 'svelte/store';

export const lang = writable('')

// export const lang = readable(new Date(), (set) => {
//   set('ru');
// });


// export const lang = writable('')
//
// page.subscribe((value: any) => {
//   //pageVal = value
//   lang.set(value.params.lang)
// })
