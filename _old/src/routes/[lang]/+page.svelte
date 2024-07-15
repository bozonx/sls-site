<script>
import {getContext} from "svelte";
import {t} from '$lib/store/t'
import {ALL_TAGS_CONTEXT} from '$lib/constants'
import RenderHtml from "$lib/components/RenderHtml.svelte"
import PageHeader from '$lib/components/PageHeader.svelte'
import TagsGrid from '$lib/components/TagsGrid.svelte'


let allTags

$: allTags = getContext(ALL_TAGS_CONTEXT)

export let data
</script>

<svelte:head>
	<title>{$t('chunks.projectFullName')}</title>
	<meta name="description" content={data.result.meta.descr} />
</svelte:head>

<section>
	<div>
		<RenderHtml html={data.result.html} />
	</div>

	<div class="mt-10">
		<PageHeader>{$t('link.allTags')}</PageHeader>
		<TagsGrid tags={$allTags} />
	</div>
</section>
