<script>
  import PagesList from '$lib/components/PagesList.svelte'
  import {page} from "$app/stores";
  import {t} from '$lib/store/t'

  export let data

  let season

  $: season = $page.params.season.replace(/\-/, ' - ')
</script>

<svelte:head>
  <title>{$t('chunks.season')} {season} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={`${$t('descr.season')} ${season}`} />
</svelte:head>

<PagesList baseUrl={`/${$page.params.lang}/blog`} res={data}>
  <div class="flex w-full">
    <div class="flex-1">{`${$t('chunks.season')} ${season}`}</div>
    <div>
      <a class="underline font-normal text-sm" href={`/${$page.params.lang}/seasons`}>
        {$t('link.allSeasons')}
      </a>
    </div>
  </div>
</PagesList>
