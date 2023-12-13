<script lang="ts">
	import type { PageData, ActionData } from './$types';

	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	$: select = form?.select;
	$: game = select ? form.game : data.game;
</script>

<form method="POST" use:enhance>
	<p class="target">{game.target}</p>

	<div class="images">
		{#each game.items as item}
			<button name="select" value={item.wiradjuri} disabled={select ? true : false}>
				<img src={`/img/${item.image}`} alt={`${item.english}`} />
			</button>
		{/each}
		<input type="hidden" name="game" value={JSON.stringify(game)} />
	</div>

	{#if select}
		<div class="answer-panel">
			<p class="answer">
				You selected {form.select} - {select == game.target ? 'correct! ✅' : 'incorrect ❌'}
			</p>
			<button name="reset" value="true" class="button">Next Pick</button>
		</div>
	{/if}
</form>
