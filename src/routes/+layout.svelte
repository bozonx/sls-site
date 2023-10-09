<script>
	import { SvelteUIProvider } from '@svelteuidev/core'
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	//import HeadContent from './HeadContent.svelte'
	import SideBar from './SideBar.svelte'
	//import FooterContent from './FooterContent.svelte'
	import './styles.css'

	// let isDark = false;
	// let opened = false;
	//
	// function toggleTheme() {
	// 	isDark = !isDark;
	// }
	// function toggleOpened() {
	// 	opened = !opened;
	// }
</script>


<div class="app">
	<main>
		<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver="dark">
			<slot />

			<SideBar />

		</SvelteUIProvider>
	</main>
</div>

<style>
/*
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	*/
</style>
