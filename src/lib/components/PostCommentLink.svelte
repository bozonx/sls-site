<script>
  import { MessageCaptionSolid } from 'flowbite-svelte-icons'
  import SimpleLink from "$lib/components/SimpleLink.svelte";
  import {t} from '$lib/store/t'

  export let href
</script>

<a href={href} class="flex items-center underline hover:text-gray-700 dark:hover:text-white" target="_blank">
  <span class="mr-2"><MessageCaptionSolid /></span>
  <span>{$t('layout.commentsLink')}</span>
</a>
