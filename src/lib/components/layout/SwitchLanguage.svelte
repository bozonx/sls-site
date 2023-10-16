<script>
  import {Button, Dropdown, DropdownItem} from "flowbite-svelte"
  import {GlobeSolid} from "flowbite-svelte-icons"
  import {page} from "$app/stores";
  import {LANG_NAMES, SUPPORTED_LANGS} from "$lib/constants";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const makeLangUrl = (lang) => {
    return ($page.url.pathname || '').replace(/^\/\w+/, `/${lang}`)
  }

</script>

<Button color="dark" class="px-3 text-gray-600 dark:text-gray-400 bg-transparent dark:bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700" size="lg">
  <GlobeSolid class="w-5 h-5" />
  <span class="ml-2 text-xs">{$page.params.lang.toUpperCase()}</span>
</Button>
<Dropdown data-sveltekit-preload-data="tap" activeUrl={makeLangUrl($page.params.lang)}>
  {#each SUPPORTED_LANGS as lang}
    <DropdownItem on:click={() => dispatch('langSelect')} href={makeLangUrl(lang)}>{LANG_NAMES[lang]}</DropdownItem>
  {/each}
</Dropdown>
