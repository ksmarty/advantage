<script lang="ts">
	import { theme } from "$lib/stores";
	import { fade } from "svelte/transition";
	import { quadInOut } from "svelte/easing";
	import { Theme } from "$lib/enums";

	let mode = $theme;

	const toggleTheme = () => {
		mode = null;
		$theme = $theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		setTimeout(() => (mode = $theme), 125);
	};
</script>

<nav>
	<button on:click={toggleTheme}>
		<span class="material-icons">
			{#if mode}
				<span transition:fade={{ duration: 125, easing: quadInOut }}>
					{mode}_mode
				</span>
			{/if}
		</span>
	</button>
	<h1><span>The</span>Advantage</h1>
	<button id="search">
		<span class="material-icons"> search </span>
	</button>
</nav>

<style lang="scss">
	* {
		transition: all 250ms;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		margin: unset;
		color: var(--primary);

		span {
			color: var(--on-background);
			font-size: 66%;
			margin-right: 0.1em;
		}
	}

	// Reset
	button {
		background: none;
		padding: 0em;
		border: none;
		-webkit-appearance: button;
	}

	.material-icons {
		background: var(--secondary-container);
		color: var(--on-secondary-container);
		padding: 0.25em;
		border-radius: var(--radius);

		text-shadow: 1.5px 1.5px 2px rgba(#000, 0.3);
	}
</style>
