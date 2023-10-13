<script>
  import { MessageCaptionSolid } from 'flowbite-svelte-icons'
  import {t} from '$lib/store/t'

  export let href
</script>

<a href={href} class="flex items-center underline" target="_blank">
  <span class="mr-2"><MessageCaptionSolid /></span>
  <span>{$t('layout.commentsLink')}</span>
</a>
