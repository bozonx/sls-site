<script>
  import PagesList from '$lib/components/PagesList.svelte'
  import {page} from "$app/stores";
  import {t} from '$lib/store/t'
  import {SUPPORTED_LANGS} from "$lib/constants";

  // export let data
  //
  // console.log(111, data)
  
  //let lang = 'ru'
</script>

<svelte:head>
  <title>Sitemap | {$t('chunks.projectFullName')}</title>
  <meta name="description" content="Site map" />
</svelte:head>

<secion>
  {#each SUPPORTED_LANGS as lang}
    <a href={`/${lang}/`}>{`/${lang}`}</a>
    <a href={`/${lang}/recent`}>{`/${lang}/recent`}</a>
    <a href={`/${lang}/tags`}>{`/${lang}/tags`}</a>
    <a href={`/api/1/seasons/${lang}`}>{`/api/1/seasons/${lang}`}</a>
    <a href={`/${lang}/seasons`}>{`/${lang}/seasons`}</a>
  {/each}
</secion>
