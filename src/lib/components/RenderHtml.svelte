<script>
import {getContext} from "svelte";
import {OPEN_IMG_MODAL_CONTEXT} from '$lib/constants'

let className = ''
let openImgModal
const onHtmlClick = (event) => {

  if (event?.target?.tagName === 'IMG') {

    openImgModal(event.target?.attributes?.['data-full']?.value)
  }
}

$: openImgModal = getContext(OPEN_IMG_MODAL_CONTEXT)

export { className as class }
export let html
</script>

<div class="html-block {className}" on:click={onHtmlClick}>
  {@html html}
</div>
