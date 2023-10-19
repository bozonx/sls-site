<script>
import {page} from "$app/stores";
import {t} from '$lib/store/t'


export let closeDrawer
</script>


<a
  href={`/${$page.params.lang}`}
  on:click={closeDrawer}
  class="flex items-center mb-4 sidebar-logo"
>
  <img src="/images/site_logo.svg" class="h-16" alt="Project logo" />
  <div class="text-xl font-semibold text-black w-min sidebar-logo__text">
    {@html $t('chunks.projectFullName')}
  </div>
</a>
