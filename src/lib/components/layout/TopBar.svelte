<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		DarkMode,
	} from "flowbite-svelte";
	import {HeartSolid, BarsSolid} from "flowbite-svelte-icons";
	import { page } from '$app/stores';
	import SwitchLanguage from "$lib/components/layout/SwitchLanguage.svelte";
	import {t} from '$lib/store/t'


	export let toggleDrawer
	export let breakPointReached

	$: activeUrl = $page.url.pathname
</script>

<Navbar>
	{#if breakPointReached}
		<NavBrand href={`/${$page.params.lang}`} class="lg:ml-64">
			<img src="/images/site_logo.svg" class="mr-3 h-6 sm:h-9" alt="Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4">
				{$t('chunks.projectFullName')}
			</span>
		</NavBrand>

		<span on:click={toggleDrawer}>
			<BarsSolid />
		</span>
	{/if}

	<!--
	<div class="hidden relative md:block">
		<Input id="search-navbar" class="pl-10" placeholder="Search..." />
	</div>
	-->

	{#if !breakPointReached}
		<NavUl divClass="ml-auto block" activeUrl={activeUrl}>
			<NavLi href={`/${$page.params.lang}`}>{$t('link.home')}</NavLi>
			<NavLi href={`/${$page.params.lang}/page/donate`}>
				<span class="flex space-x-1"><HeartSolid /><span>{$t('link.donate')}</span></span>
			</NavLi>
			<!--<NavLi href={`/${$page.params.lang}/page/about`}>{$t('link.about')}</NavLi>-->
			<!--
      <NavLi href="https://youtube.com/@slsfreedom" title={$t('link.youtubeChannel')} target="_blank">
        <YoutubeSolid />
      </NavLi>
      -->
		</NavUl>

		<div class="mr-1">
			<SwitchLanguage />
		</div>

		<div>
			<DarkMode size="lg" />
		</div>
	{/if}


	<!--<NavHamburger on:click={toggle} btnClass="lg:hidden" />-->
</Navbar>
