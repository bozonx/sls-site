<script>
  import { Dropdown, DropdownItem, Button } from 'flowbite-svelte';
  import {ChevronDownSolid, HeadphonesSolid} from 'flowbite-svelte-icons';
  import PoscastIcon from "./PoscastIcon.svelte"
  import PodcastDropdownItem from "./PodcastDropdownItem.svelte"
  import {t} from '$lib/store/t'


  export let podcasts = {}
</script>

<Button>
  <span class="mr-2"><HeadphonesSolid /></span>{$t('layout.podcasts')}<ChevronDownSolid class="w-3 h-3 ml-2 text-white dark:text-white" />
</Button>
<Dropdown>
  {#each Object.keys(podcasts) as poscastName}
    <PodcastDropdownItem {poscastName} href={podcasts[poscastName]} />
  {/each}
</Dropdown>
