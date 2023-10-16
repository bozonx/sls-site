<script>
  import PagesList from '$lib/components/PagesList.svelte'
  import HeaderSubLink from '$lib/components/HeaderSubLink.svelte'
  import {page} from "$app/stores";
  import {t} from '$lib/store/t'

  export let data
</script>

<svelte:head>
  <title>{$t('header.tag')} #{$page.params.tag} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={`${$t('descr.tag')} #${$page.params.tag}`} />
</svelte:head>

<secion>
  <PagesList baseUrl={`/${$page.params.lang}/blog`} res={data}>
    <div class="flex w-full">
      <div class="flex-1">{`${$t('header.tag')} #${$page.params.tag}`}</div>
      <div>
        <HeaderSubLink href={`/${$page.params.lang}/tags`}>{$t('link.allTags')}</HeaderSubLink>
      </div>
    </div>
  </PagesList>
</secion>