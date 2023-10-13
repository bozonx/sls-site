<script>
  import { SidebarItem } from 'flowbite-svelte'
  import { IconSolid } from 'flowbite-svelte-icons'
  import {page} from "$app/stores"

  export let label
  export let href
  export let icon
  export let target = null


  let resolvedHref

  $: resolvedHref = (href.startsWith('/')) ? `/${$page.params.lang}${href}` : href
</script>

<SidebarItem {label} {target} href={resolvedHref}>
  <svelte:fragment slot="icon">
    <IconSolid icon={icon} class="text-gray-500 dark:text-gray-400" />
  </svelte:fragment>
</SidebarItem>
