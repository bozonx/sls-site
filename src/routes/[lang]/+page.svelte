<script>
	import {t} from '$lib/store/t'

	export let data
</script>

<svelte:head>
	<title>{$t('chunks.projectFullName')}</title>
	<meta name="description" content={data.result.meta.descr} />
</svelte:head>

<section>
	<div class="html-block">
		{@html data.result.html}
	</div>
</section>
