<script>
import MyFooterLink from '$lib/components/layout/MyFooterLink.svelte'
import {t} from '$lib/store/t'
</script>


<footer class="md:flex w-full items-start text-sm text-gray-500 dark:text-gray-400">
  <!--<FooterCopyright href="/" by="PFS™" year={2023} />-->
  <div class="flex-1 max-md:mb-5 pr-2">
    {$t('layout.copyWarn')}
  </div>

  <ul class="flex flex-wrap gap-x-9 items-center">
    <MyFooterLink href="/page/about">{$t('link.about')}</MyFooterLink>
    <MyFooterLink href="/page/contacts">{$t('link.contacts')}</MyFooterLink>
  </ul>
</footer>
