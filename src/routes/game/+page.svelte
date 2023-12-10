<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<p>Which type of pictures do you want to learn with?</p>

<ul class="button-group">
	{#each data.games as game}
		<li><a href="/game/{game.slug}" class="button">{game.name}</a></li>
	{/each}
</ul>
