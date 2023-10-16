<script>
  import {getContext} from "svelte";
  import {OPEN_IMG_MODAL_CONTEXT} from '$lib/constants'

  export let html

  let className = ''

  export { className as class }

  let openImgModal

  $: openImgModal = getContext(OPEN_IMG_MODAL_CONTEXT)

  const onHtmlClick = (event) => {
    if (event?.target?.tagName === 'IMG') {
      openImgModal(event.target?.attributes?.['data-full']?.value)
    }
  }
</script>

<div class="html-block {className}" on:click={onHtmlClick}>
  {@html html}
</div>
