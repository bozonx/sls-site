<script lang="ts">
  import { getContext } from 'svelte'
  import {ALL_TAGS_CONTEXT} from '$lib/constants'
  import {page} from "$app/stores"
  import SimpleLink from '$lib/components/SimpleLink.svelte'
  import PageHeader from '$lib/components/PageHeader.svelte'
  import {t} from '$lib/store/t'

</script>

<svelte:head>
  <title>{$t('link.onSeasons')}</title>
  <meta name="description" content={$t('descr.onSeasons')} />
</svelte:head>

<div>
  <PageHeader>{$t('link.onSeasons')}</PageHeader>

</div>
