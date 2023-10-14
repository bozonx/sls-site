<script>
import {DropdownItem} from "flowbite-svelte"
import PoscastIcon from "./PoscastIcon.svelte"
import {t} from '$lib/store/t'

export let poscastName
export let href
</script>

<DropdownItem class="flex items-center" href={href} target="_blank">
  <span class="mr-2"><PoscastIcon icon={poscastName} class="w-5" /></span>
  <span> {$t(`podcasts.${poscastName}`)}</span>
</DropdownItem>
