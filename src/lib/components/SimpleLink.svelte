<script>
  import {page} from "$app/stores"

  export let href
  export let target = null


  let resolvedHref

  $: resolvedHref = (href.startsWith('/')) ? `/${$page.params.lang}${href}` : href
</script>

<a class="underline" href={resolvedHref} {target}><slot /></a>
