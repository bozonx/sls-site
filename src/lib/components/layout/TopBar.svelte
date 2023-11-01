<script>
import {HeartSolid, BarsSolid} from "flowbite-svelte-icons";
import { page } from '$app/stores';
import SwitchLanguage from "$lib/components/layout/SwitchLanguage.svelte";
import DarkModeSwitch from "$lib/components/layout/DarkModeSwitch.svelte";
import TopBarLink from "./TopBarLink.svelte";
import {t} from '$lib/store/t'
</script>

<div class="flex w-full py-2 px-2">
	<div class="flex-1">
		<ul class="flex pl-1 pr-1">
			<li>
				<TopBarLink id="topbar-drawer-switch" isIcon={true}><BarsSolid /></TopBarLink>
			</li>
		</ul>
	</div>

	<ul class="flex">
		<li><TopBarLink href={`/${$page.params.lang}`}>{$t('link.home')}</TopBarLink></li>
		<li>
			<TopBarLink href={`/${$page.params.lang}/page/donate`}>
				<HeartSolid /><span>{$t('link.donate')}</span>
			</TopBarLink>
		</li>
		<!--
		<li><TopBarLink isIcon={true}><SearchSolid class="w-5 h-5" /></TopBarLink></li>
		-->
		<li><SwitchLanguage /></li>
		<li><DarkModeSwitch /></li>
	</ul>
</div>
