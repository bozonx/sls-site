<script>
	import { Navbar, ShellSection } from '@svelteuidev/core'
	import { page } from '$app/stores';
</script>

<Navbar>
	<!-- First section with normal height (depends on section content) -->
	<ShellSection>First section</ShellSection>

	<!-- Grow section will take all available space that is not taken by first and last sections -->
	<ShellSection grow>Grow section</ShellSection>

	<!-- Last section with normal height (depends on section content) -->
	<ShellSection>Last section</ShellSection>
</Navbar>

<style>

</style>
