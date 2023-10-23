import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`/api/games`);
	const games = await res.json();

	return { games };
};
