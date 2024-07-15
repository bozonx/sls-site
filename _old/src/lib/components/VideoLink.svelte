<script>
import {Button} from "flowbite-svelte"
import {YoutubeSolid} from 'flowbite-svelte-icons';
import {t} from '$lib/store/t'
import {page} from "$app/stores"

export let href
</script>

<Button color="red" size="sm" href={href} target="_blank">
  <span class="mr-2"><YoutubeSolid /></span> {$t('layout.videoLink')}
</Button>
