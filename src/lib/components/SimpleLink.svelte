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
