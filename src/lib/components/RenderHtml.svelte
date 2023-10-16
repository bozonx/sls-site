<script>
  import {getContext} from "svelte";
  import {OPEN_IMG_MODAL_CONTEXT} from '$lib/constants'

  export let html

  let className = ''

  export { className as class }

  let openImgModal

  $: openImgModal = getContext(OPEN_IMG_MODAL_CONTEXT)

  const onHtmlClick = (event) => {
    if (event?.srcElement?.tagName === 'IMG') {
      //= '/images/pages-full/2023-2_how-does-a-person-get-into-the-system_010article.avif'

      //console.log(event.srcElement.src, event.srcElement.src.replace(/\/images\/pages\//, '/images/pages-full/'))
      // .replace(/\/images\/pages\//, '/images/pages-full/')

      openImgModal(event.srcElement.src)
    }
  }
</script>

<div class="html-block {className}" on:click={onHtmlClick}>
  {@html html}
</div>
