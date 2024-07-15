<script>
  import {Button} from "flowbite-svelte"
  import {MoonSolid, SunSolid} from "flowbite-svelte-icons"
  import {page} from "$app/stores"
</script>

<Button color="dark" class="px-3 text-gray-600 dark:text-gray-400 bg-transparent dark:bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700 thememode-btn" size="lg">
  <MoonSolid class="w-5 h-5 thememode-moon" />
  <SunSolid class="w-5 h-5 thememode-sun" />
</Button>
