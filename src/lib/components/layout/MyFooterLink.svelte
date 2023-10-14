<script>
  import {FooterLink} from "flowbite-svelte"
  import {page} from "$app/stores";

  export let href

  let className = ''

  export { className as class }

</script>

<FooterLink
  href={`/${$page.params.lang}${href}`}
  aClass="hover:text-gray-200"
  liClass="mr-4 last:mr-0 md:mr-6 {className}"
><slot /></FooterLink>
