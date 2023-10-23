<script lang="ts">
	import type { PageData } from './$types';
	import type { Game } from '$lib/games';

	export let data: PageData;

	const game: Game = data.game;
</script>

<form method="POST">
	{#each game.items as item}
		<button name="select" value={item}>{item}</button>
	{/each}
	<input type="hidden" name="data" value={JSON.stringify(data)} />
</form>
