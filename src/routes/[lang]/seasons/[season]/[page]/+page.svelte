<script>
import PagesList from '$lib/components/PagesList.svelte'
import {page} from "$app/stores";
import {t} from '$lib/store/t'
import HeaderSubLink from '$lib/components/HeaderSubLink.svelte'


let season

$: season = $page.params.season.replace(/\-/, ' - ')

export let data
</script>

<svelte:head>
  <title>{$t('chunks.season')} {season} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={`${$t('descr.season')} ${season}`} />
</svelte:head>

<secion>
  <PagesList baseUrl={`/${$page.params.lang}/blog`} res={data}>
    <div class="flex w-full">
      <div class="flex-1">{`${$t('chunks.season')} ${season}`}</div>
      <div>
        <HeaderSubLink href={`/${$page.params.lang}/seasons`}>
          {$t('link.allSeasons')}
        </HeaderSubLink>
      </div>
    </div>
  </PagesList>
</secion>
