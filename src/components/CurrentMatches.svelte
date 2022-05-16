<script lang="ts">
	const matches = [1, 2, 3];
</script>

<section>
	<h3>Current Matches</h3>

	<div class="matches">
		{#each matches as match}
			<div class="match">
				<!-- $.events[*].season.slug -->
				<h5 class="season">Post Season</h5>
				<!-- $.events[*].competitions[*].notes[0].headline -->
				<h6 class="headline">East 1st Round - Game 7</h6>

				<div class="teams">
					<div class="team">
						<div class="advantage">
							<span style:visibility={"visible"}>
								Advantage
							</span>
						</div>

						<!-- $.events[*].competitions[*].competitors[0].team.logo -->
						<div class="logo">
							<img
								src="https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/nyr.png"
								alt="Rangers Logo"
							/>
						</div>

						<!-- $.events[*].competitions[*].competitors[0].team.shortDisplayName -->
						<span class="teamName">Rangers</span>

						<!-- $.events[*].competitions[*].competitors[0].homeAway -->
						<span class="homeAway">Home</span>
					</div>
					<div class="middle">
						<h2 class="score">
							<!-- Math.abs($.events[*].competitions[*].competitors[0].score - $.events[*].competitions[*].competitors[1].score) -->
							3
						</h2>

						<!--  -->
						<span class="time">8:50</span>

						<!--  -->
						<span class="period">3<sup>rd</sup></span>
					</div>
					<div class="team">
						<div class="advantage">
							<span style:visibility={"hidden"}> Advantage </span>
						</div>

						<!-- $.events[*].competitions[*].competitors[1].team.logo -->
						<div class="logo">
							<img
								src="https://a.espncdn.com/i/teamlogos/nhl/500/scoreboard/pit.png"
								alt="Penguins Logo"
							/>
						</div>

						<!-- $.events[*].competitions[*].competitors[1].team.shortDisplayName -->
						<span class="teamName">Penguins</span>

						<!-- $.events[*].competitions[*].competitors[1].homeAway -->
						<span class="homeAway">Away</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;

		text-shadow: 1.5px 1.5px 2px rgba(#000, 0.3);
	}

	.matches {
		display: flex;
		overflow-x: scroll;
		width: calc(100vw - 3vh);
		gap: 0.75em;

		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.matches::-webkit-scrollbar {
		display: none;
	}

	.match {
		background: var(--primary-container);
		border-radius: var(--radius);
		padding: 1em;
		min-width: 15em;
	}

	.teams {
		display: flex;
		justify-content: space-between;
		margin-top: 1em;
	}

	.team {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;

		color: var(--on-primary-container);
	}

	.middle {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
	}

	.advantage {
		display: flex;
		align-items: center;

		font-size: smaller;
		color: var(--on-primary-container);

		height: 3em;
		margin-bottom: 0.25em;
	}

	.score {
		color: var(--tertiary);
		font-size: xx-large;
	}

	.period,
	.time {
		margin-top: 0.5em;
		color: var(--on-primary-container);
	}

	.logo {
		img {
			width: 100%;
			filter: drop-shadow(1.5px 1.5px 2px rgba(#000, 0.3));
		}

		display: inline-flex;
		box-sizing: border-box;
		padding: 0.5em;
		width: 4rem;

		background: var(--on-primary-container);
		border-radius: var(--radius);
	}

	.teamName {
		margin-top: 0.5em;
		font-size: medium;
	}

	.homeAway {
		font-size: smaller;
	}

	.season,
	.headline {
		text-align: center;
		margin-bottom: 0.5em;
	}

	.season {
		color: var(--on-primary-container);
	}

	.headline {
		color: var(--primary);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
	}

	h3 {
		color: var(--secondary);
		margin-bottom: 0.5em;
	}
</style>
