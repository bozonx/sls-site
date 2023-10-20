<script>
import {page} from "$app/stores"


export let href
</script>

<li>
  <a
    href={`/${$page.params.lang}${href}`}
    class="hover:text-gray-400 hover:dark:text-gray-300"
    liClass=""
  ><slot /></a>
</li>
