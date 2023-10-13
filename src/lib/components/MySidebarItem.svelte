<script>
  import { SidebarItem } from 'flowbite-svelte';
  import { IconSolid } from 'flowbite-svelte-icons';

  import {page} from "$app/stores";

  export let label
  export let href
  export let icon
  export let target


  let resolvedHref

  $: resolvedHref = (href.startsWith('/')) ? `/${$page.params.lang}${href}` : href
</script>

<SidebarItem {label} {target} href={resolvedHref}>
  <svelte:fragment slot="icon">
    <IconSolid icon={icon} class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
  </svelte:fragment>
</SidebarItem>
