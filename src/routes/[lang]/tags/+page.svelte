<script lang="ts">
import {getContext} from 'svelte'
import {ALL_TAGS_CONTEXT} from '$lib/constants'
import {page} from "$app/stores"
import {t} from '$lib/store/t'
import SimpleLink from '$lib/components/SimpleLink.svelte'
import PageHeader from '$lib/components/PageHeader.svelte'
import TagsGrid from '$lib/components/TagsGrid.svelte'


let allTags

$: allTags = getContext(ALL_TAGS_CONTEXT)
</script>

<svelte:head>
  <title>{$t('link.allTags')} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={$t('descr.allTags')} />
</svelte:head>

<section>
  <PageHeader>{$t('link.allTags')}</PageHeader>

  <TagsGrid tags={$allTags} />

<!--  <ul class="space-y-3">
    {#each $allTags as tag}
      <li>
        <SimpleLink href={`/tags/${tag}/1`}>#{tag}</SimpleLink>
      </li>
    {/each}
  </ul>-->
</section>
