<script lang="ts">
	import { Sports } from "$lib/enums";
	import { selectedSport } from "$lib/stores";
</script>

<div id="SportSelect">
	{#each Object.values(Sports) as sport}
		<button class="sport" on:click={() => ($selectedSport = sport)}>
			<span class="material-icons">
				sports_{sport.toString().toLowerCase()}
			</span>
			<span class="sport-name">
				{sport}
			</span>
		</button>
	{/each}
</div>

<style lang="scss">
	* {
		transition: all 250ms;
	}

	// Reset
	button {
		background: none;
		padding: 0em;
		border: none;
		-webkit-appearance: button;
	}

	#SportSelect {
		display: flex;
		gap: 0.75em;
		overflow-x: scroll;
		width: calc(100vw - 3vh);

		// Disable scrollbars
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	#SportSelect::-webkit-scrollbar {
		display: none;
	}

	.sport {
		display: flex;
		align-items: center;
		gap: 0.5em;

		color: var(--on-tertiary-container);
		background: var(--tertiary-container);
		border-radius: var(--radius);

		width: fit-content;
		padding: 0.25em 0.5em;
		text-shadow: 1.5px 1.5px 2px rgba(#000, 0.3);
	}

	.sport-name {
		vertical-align: bottom;
	}
</style>
