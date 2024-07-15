<script>
import {page} from "$app/stores"


let className = ''
let resolvedHref

$: resolvedHref = (href.startsWith('/')) ? `/${$page.params.lang}${href}` : href

export { className as class }
export let href
export let target = null
</script>

<a class="simple-link {className}" href={resolvedHref} {target}><slot /></a>
