<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import type { Game } from '$lib/games';

	export let data: PageData;
	export let form: ActionData;

	let game: Game;

	if (form) {
		game = form.game;
	} else {
		game = data.game;
	}
</script>

<form method="POST">
	{#each game.items as item}
		<button name="select" value={item}>{item}</button>
	{/each}
	<input type="hidden" name="game" value={JSON.stringify(game)} />
</form>

{#if form?.select}
	<p>You selected {form.select}!</p>
{/if}
