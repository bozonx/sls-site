<script>
import {SidebarItem} from 'flowbite-svelte'
import {IconSolid} from 'flowbite-svelte-icons'
import {page} from "$app/stores"


let resolvedHref
let externalLink

$: internalLink = href.startsWith('/')
$: resolvedHref = (internalLink) ? `/${$page.params.lang}${href}` : href

export let label
export let href
export let icon
</script>

<SidebarItem
  on:click
  {label}
  target={(internalLink) ? undefined : '_blank'}
  href={resolvedHref}
  class="rounded-none"
>
  <svelte:fragment slot="icon">
    <IconSolid icon={icon} class="text-gray-500 dark:text-gray-400" />
  </svelte:fragment>
</SidebarItem>
