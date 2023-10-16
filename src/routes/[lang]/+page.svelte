<script>
	import {t} from '$lib/store/t'
	import RenderHtml from "$lib/components/RenderHtml.svelte";

	export let data
</script>

<svelte:head>
	<title>{$t('chunks.projectFullName')}</title>
	<meta name="description" content={data.result.meta.descr} />
</svelte:head>

<section>
	<div class="html-block">
		<RenderHtml html={data.result.html} />
	</div>
</section>
