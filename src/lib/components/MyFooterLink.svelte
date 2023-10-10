<script>
  import {FooterLink} from "flowbite-svelte"
  import {curLang} from "$lib/helpers";
  import {page} from "$app/stores";

  export let href
</script>

<FooterLink
  href={`/${curLang($page.url.pathname)}${href}`}
  aClass="hover:text-gray-200"
><slot /></FooterLink>
