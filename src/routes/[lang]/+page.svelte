<script>
	import {t} from '$lib/store/t'

	export let data
</script>

<svelte:head>
	<title>{$t('chunks.projectFullName')}</title>
	<meta name="description" content={data.result.meta.descr} />
</svelte:head>

<section>
<!--	<h1 class="font-bold text-3xl text-center mb-5">
		{$t('chunks.projectFullName')}
	</h1>-->

<!--	<div>
		<img src="/texts/ru/page/main.jpg" />
	</div>-->

	<div class="mt-8 html-block">
		{@html data.result.html}
	</div>

</section>
