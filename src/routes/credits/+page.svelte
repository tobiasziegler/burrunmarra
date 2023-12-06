<script lang="ts">
	import { games } from '$lib/games';
</script>

<h2>Image credits</h2>

{#each games as game}
	<h3>{game.name}</h3>
	<ul>
		{#each game.items as item}
			<li>{item.english} - {item.credit}</li>
		{/each}
	</ul>
{/each}
