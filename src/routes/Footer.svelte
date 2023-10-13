<script>
  import { Footer, FooterLinkGroup } from 'flowbite-svelte';
  import MyFooterLink from "$lib/components/MyFooterLink.svelte"
  import {t} from '$lib/store/t'
</script>

<Footer class="!bg-transparent !p-0 shadow-none">
  <!--<FooterCopyright href="/" by="PFS™" year={2023} />-->
  <div class="text-gray-600 dark:text-gray-400 text-sm max-md:mb-5">
    {$t('layout.copyWarn')}
  </div>

  <FooterLinkGroup ulClass="flex underline flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
    <MyFooterLink href="/page/contacts">{$t('link.contacts')}</MyFooterLink>
  </FooterLinkGroup>
</Footer>
