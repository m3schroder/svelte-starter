<script lang="ts">
	import { afterUpdate } from 'svelte';

	import '../app.postcss';
	import Navbar from '@ui/Navbar.svelte';
	import Menu from '@ui/Menu.svelte';
	import Footer from '@ui/Footer.svelte';

	let topLevel: HTMLElement;
	afterUpdate(() => {
		topLevel.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	$: navHeight = 60;
</script>

<main class="flex flex-col  items-center h-screen overflow-auto" bind:this={topLevel}>
	<content
		class="h-fit lg:pt-28 flex flex-col items-center lg:gap-16 gap-9 lg:w-full w-screen pt-5 mb-24"
		style={`padding-bottom: ${navHeight}px;`}
	>
		<slot />
		<div
			class="flex lg:flex-row flex-col lg:items-start lg:justify-between items-center gap-9 lg:w-full lg:max-w-3xl"
		>
			<Footer />
		</div>
	</content>
	<Navbar bind:navHeight />
	<div class={`fixed w-full z-10 flex-center`}>
		<Menu />
	</div>
</main>
