import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/game/${params.slug}`);
	const game = await res.json();

	return { game };
};
