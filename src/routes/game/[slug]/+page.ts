import type { PageLoad } from './$types';
import type { Game } from '$lib/games';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/game/${params.slug}/4`);
	const game: Game = await res.json();

	return { game };
};
