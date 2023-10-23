<script lang="ts">
	import { games } from '$lib/games';
</script>

<p>Which type of pictures do you want to learn with?</p>

<ul>
	{#each games as game}
		<li><a href="/game/{game.slug}">{game.name}</a></li>
	{/each}
</ul>
