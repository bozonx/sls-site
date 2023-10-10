<script>
	import { page } from '$app/stores';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Button,
		Dropdown,
		DropdownItem,
		Input
	} from "flowbite-svelte";
	//import {Cog} from "svelte-heros-v2";
	import { ChevronDownSolid, GlobeSolid } from 'flowbite-svelte-icons'
	import {SUPPORTED_LANGS} from "$lib/constants";
	import {curLang} from "$lib/helpers";


	export let toggleDrawer

	$: activeUrl = $page.url.pathname
	let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
	let ulClass =
			'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium gap-4 dark:lg:bg-transparent lg:bg-white lg:border-0';
	// let navDivClass =
	// 		'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 flex items-center justify-between w-full mx-auto py-1.5 px-4';
	// let data = {
	//   pages: [
	//     {
	//       meta: {
	//         title: 'aaa'
	//       },
	//       path: '/page'
	//     },
	//   ],
	//   articles: [
	//     {
	//       meta: {
	//         title: 'aaa'
	//       },
	//       path: '/page'
	//     },
	//   ],
	// }


	// btnClass="xl:hidden focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 m-0 mr-3"

	const makeLangUrl = (lang) => {
		const pathName = ($page.url.pathname || '')
				.replace(/^\/\w{2}/, '')

		return `/${lang}${pathName}`
	}


	// class="flex items-center ml-auto"
	//class="inline-block dark:hover:text-white hover:text-gray-900"
	// 			nonActiveClass="md:!pl-3 md:!py-2 lg:!pl-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
	// activeClass="md:!pl-3 md:!py-2 lg:!pl-0 lg:text-primary-700 text-white dark:text-white dark:lg:text-primary-500 bg-primary-700 lg:bg-transparent dark:bg-primary-600 lg:dark:bg-transparent cursor-default"
</script>

<Navbar let:hidden let:toggle>
	<!--<NavHamburger
			on:click={toggleDrawer}
	/>-->
	<!--<Button on:click={toggleDrawer}>aaa</Button>-->
	<NavBrand href="/" class="lg:ml-64">
		<img src="/images/site_logo.svg" class="mr-3 h-6 sm:h-9" alt="Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4">
			Система личной свободы
		</span>
	</NavBrand>
	<NavUl
			{hidden}
			{divClass}
			{ulClass}
			activeUrl={activeUrl}
	>
		<NavLi class="lg:px-2 lg:mb-0" href="/">Home</NavLi>
		<NavLi
			class="lg:px-2 lg:mb-0"
			href={`/${curLang($page.url.pathname)}/page/about`}
		>About</NavLi>
		<NavLi
			class="lg:px-2 lg:mb-0"
			href={`/${curLang($page.url.pathname)}/page/donate`}
		>Donate</NavLi>
		<NavLi
			class="lg:px-2 lg:mb-0"
			href="https://www.youtube.com/@slsfreedom "
		>Youtube channel</NavLi>
	</NavUl>

	<!--
	<div class="hidden relative md:block">
		<Input id="search-navbar" class="pl-10" placeholder="Search..." />
	</div>
	-->

	<div class="mr-1">
		<Button color="dark" class="!pl-3 !pr-3" size="lg">
			<GlobeSolid class="w-5 h-5" />
			<!--<ChevronDownSolid class="w-3 h-3 ml-2 text-white dark:text-white" />-->
		</Button>
		<Dropdown>
			{#each SUPPORTED_LANGS as lang}
				<DropdownItem href={makeLangUrl(lang)}>{lang}</DropdownItem>
			{/each}
		</Dropdown>
	</div>

	<div>
		<DarkMode size="lg" />
	</div>


	<!--<NavHamburger on:click={toggle} btnClass="lg:hidden" />-->
</Navbar>

<style>
</style>
