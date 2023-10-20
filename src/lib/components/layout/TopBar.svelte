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
			<ul class="flex pl-1 pr-1">
				<li>
					<TopBarLink isIcon={true} on:click={toggleDrawer}><BarsSolid /></TopBarLink>
				</li>
			</ul>
		{/if}
	</div>

	<ul class="flex">
		{#if !breakPointReached}
			<li><TopBarLink href={`/${$page.params.lang}`}>{$t('link.home')}</TopBarLink></li>
		{/if}
		<li>
			<TopBarLink href={`/${$page.params.lang}/page/donate`}>
				<HeartSolid /><span>{$t('link.donate')}</span>
			</TopBarLink>
		</li>
		<!--
		<li><TopBarLink isIcon={true}><SearchSolid class="w-5 h-5" /></TopBarLink></li>
		-->
		{#if !breakPointReached}
			<li><SwitchLanguage /></li>
		{/if}
		<li><DarkMode size="lg" /></li>
	</ul>
</div>
