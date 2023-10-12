<script>
  import {FooterLink} from "flowbite-svelte"
  import {page} from "$app/stores";

  export let href
</script>

<FooterLink
  href={`/${$page.params.lang}${href}`}
  aClass="hover:text-gray-200"
><slot /></FooterLink>
