<script>
import {DarkMode} from "flowbite-svelte"
import SwitchLanguage from "$lib/components/layout/SwitchLanguage.svelte"
</script>

<div class="w-full flex justify-end mr-2 space-x-1">
  <SwitchLanguage on:langSelect />
  <DarkMode size="lg" />
</div>
