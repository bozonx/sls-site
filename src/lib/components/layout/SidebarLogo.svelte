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

<style>
  .sidebar-logo {
    padding: 1.25rem 0 1.3rem 2.75rem;
    background-color: rgb(249 250 251);
  }
  .dark .sidebar-logo {
    background-color: #f7f7f7;
  }
  .sidebar-logo__text {
    margin-left: 1.15rem;
    line-height: 1.4rem;
  }
</style>
