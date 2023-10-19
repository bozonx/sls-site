<script>
  import { page } from '$app/stores';

  export const prerender = true
  export const ssr = true
</script>

<h1>{$page.status}: {$page.error.message}</h1>
