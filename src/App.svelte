<script lang="ts">
	import { layout, theme } from "$lib/stores";
	import TopNav from "$components/TopNav.svelte";
	import { Layout } from "$lib/enums";
	import SportSelect from "$components/SportSelect.svelte";
	import CurrentMatches from "$components/CurrentMatches.svelte";

	$: document.title = "Advantage";
</script>

<main color-mode={$theme}>
	{#if $layout === Layout.DEFAULT}
		<TopNav />
		<SportSelect />
		<CurrentMatches />
	{/if}
</main>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap");
	@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
	@import "styles/material";
	@import "styles/main";

	:global(:root) {
		font-family: "Lexend Deca", sans-serif;
	}

	:global(html, body, #app) {
		height: 100%;
		margin: unset;
	}

	main {
		$p: 3vh;
		padding: $p $p 0;
		height: 100%;

		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 1em;

		background: var(--background);

		transition: all 250ms;
	}
</style>
