<script>
  import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup
  } from 'flowbite-svelte';
  import {curLang} from "$lib/helpers";
  import MyFooterLink from "$lib/components/MyFooterLink.svelte"
  import { page } from '$app/stores';
</script>

<Footer class="!bg-transparent !p-0 shadow-none">
  <!--<FooterCopyright href="/" by="PFS™" year={2023} />-->
  <div class="text-gray-600 dark:text-gray-400 text-sm max-md:mb-5">
    Копирование разрешено только со ссылкой на источник
  </div>

  <FooterLinkGroup ulClass="flex underline flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <!--<MyFooterLink href="/page/about">О проекте</MyFooterLink>-->
    <MyFooterLink href="/page/contacts">Контакты</MyFooterLink>
  </FooterLinkGroup>
</Footer>
