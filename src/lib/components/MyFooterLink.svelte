<script>
  import {FooterLink} from "flowbite-svelte"
  import {page} from "$app/stores";
  import {lang} from '$lib/store/lang';

  export let href
</script>

<FooterLink
  href={`/${$lang}${href}`}
  aClass="hover:text-gray-200"
><slot /></FooterLink>
