<script>
  import {page} from "$app/stores"

  export let href
  export let target = null

  let className = ''

  export { className as class }

  let resolvedHref

  $: resolvedHref = (href.startsWith('/')) ? `/${$page.params.lang}${href}` : href
</script>

<a class="simple-link {className}" href={resolvedHref} {target}><slot /></a>

<style>
  .simple-link {
    text-decoration: underline;
    color: var(--color-a-light-link);
  }
  .simple-link:hover {
    filter: brightness(130%);
  }
  .simple-link:visited {
    color: var(--color-a-light-visited);
  }
  .dark .simple-link {
    color: var(--color-a-dark-link);
  }
  .dark .simple-link:visited {
    color: var(--color-a-dark-visited);
  }
</style>
