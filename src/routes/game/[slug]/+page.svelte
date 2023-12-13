<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import type { Game } from '$lib/games';

	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	let game: Game;

	if (form) {
		game = form.game;
	} else {
		game = data.game;
	}
</script>

<form method="POST" use:enhance>
	<h2>Select the option that matches: {game.target}</h2>

	<div class="images">
		{#each game.items as item}
			<button name="select" value={item.wiradjuri} disabled={form?.select ? true : false}>
				<img src={`/img/${item.image}`} alt={`${item.english}`} />
			</button>
		{/each}
		<input type="hidden" name="game" value={JSON.stringify(game)} />
	</div>

	{#if form?.select}
		<p class="answer">
			You selected {form.select} - {form.select == game.target ? 'correct! ✅' : 'incorrect ❌'}
		</p>
	{/if}
</form>
