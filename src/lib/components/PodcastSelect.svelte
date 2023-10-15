<script>
  import { Dropdown, DropdownItem, Button } from 'flowbite-svelte';
  import {ChevronDownSolid, HeadphonesSolid} from 'flowbite-svelte-icons';
  import PoscastIcon from "./PoscastIcon.svelte"
  import PodcastDropdownItem from "./PodcastDropdownItem.svelte"
  import {t} from '$lib/store/t'
  import {PODCAST_ICONS_FILE_NAMES} from "../constants";


  export let podcasts = {}

  let sortedPodcasts = []

  $: sortedPodcasts = [
    'site',
    ...Object.keys(PODCAST_ICONS_FILE_NAMES).filter((el) => podcasts[el])
  ]
</script>

<Button color="purple">
  <span class="mr-2"><HeadphonesSolid /></span>{$t('layout.podcasts')}<ChevronDownSolid class="w-3 h-3 ml-2 text-white dark:text-white" />
</Button>
<Dropdown>
  {#each sortedPodcasts as poscastName}
    <PodcastDropdownItem {poscastName} href={podcasts[poscastName]} />
  {/each}
</Dropdown>
