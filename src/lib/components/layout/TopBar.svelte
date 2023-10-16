<script>
	import {DarkMode} from "flowbite-svelte";
	import {HeartSolid, BarsSolid} from "flowbite-svelte-icons";
	import { page } from '$app/stores';
	import SwitchLanguage from "$lib/components/layout/SwitchLanguage.svelte";
	import TopBarLink from "./TopBarLink.svelte";
	import {t} from '$lib/store/t'


	export let toggleDrawer
	export let breakPointReached
</script>

<div class="flex w-full py-2 px-2">
	<div class="flex-1">
		{#if breakPointReached}
			<ul class="flex pl-2 pr-1">
				<li on:click={toggleDrawer}>
					<TopBarLink isIcon={true}><BarsSolid /></TopBarLink>
				</li>
			</ul>
		{/if}

		<!--
		{#if breakPointReached}
			<a href={`/${$page.params.lang}`} class="flex items-center">
				<span class="bg-white mr-2 pb-1 pr-1">
					<img src="/images/site_logo.svg" class="h-6 sm:h-9" alt="Logo" />
				</span>
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					{$t('chunks.projectFullName')}
				</span>
			</a>
		{/if}
		-->
	</div>

	<!--
	<div class="hidden relative md:block lg:ml-64">
		<Input id="search-navbar" class="pl-10" placeholder="Search..." />
	</div>
	-->

	<ul class="flex">
		{#if !breakPointReached}
		<li><TopBarLink href={`/${$page.params.lang}`}>{$t('link.home')}</TopBarLink></li>
		{/if}
		<li>
			<TopBarLink href={`/${$page.params.lang}/page/donate`}>
				<HeartSolid /><span>{$t('link.donate')}</span>
			</TopBarLink>
		</li>
		{#if !breakPointReached}
		<li><SwitchLanguage /></li>
		{/if}
		<li><DarkMode size="lg" /></li>
	</ul>
</div>
