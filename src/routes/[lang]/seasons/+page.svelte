<script lang="ts">
import { getContext } from 'svelte'
import {page} from "$app/stores"
import {t} from '$lib/store/t'
import SimpleLink from '$lib/components/SimpleLink.svelte'
import PageHeader from '$lib/components/PageHeader.svelte'


export let data
</script>

<svelte:head>
  <title>{$t('link.allSeasons')} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={$t('descr.season')} />
</svelte:head>

<section>
  <PageHeader>{$t('link.allSeasons')}</PageHeader>

  <ul class="space-y-3">
    {#each data.result as item}
      <li>
        <SimpleLink href={`/seasons/${item}/1`}>{item.replace(/\-/, ' - ')}</SimpleLink>
      </li>
    {/each}
  </ul>
</section>
