import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/game/${params.slug}/4`);
	const game = await res.json();

	return { game };
};
