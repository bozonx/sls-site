<script>
import {DarkMode} from "flowbite-svelte"
import SwitchLanguage from "$lib/components/layout/SwitchLanguage.svelte"
import DarkModeSwitch from "$lib/components/layout/DarkModeSwitch.svelte";


let className = ''

export { className as class }
</script>

<div class="w-full flex justify-end items-end mr-2 pt-5 pb-3 pr-2 space-x-1 {className}">
  <SwitchLanguage />
  <DarkModeSwitch />
</div>
