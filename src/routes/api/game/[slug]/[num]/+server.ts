import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { games } from '$lib/games';
import { getMultipleRandom } from '$lib/utils';

export const GET: RequestHandler = ({ params }) => {
	const index = games.findIndex((g) => g.slug === params.slug);
	const fulldata = games[index];
	const num = parseInt(params.num);
	const data = { ...fulldata, items: getMultipleRandom(fulldata.items, num) };

	return json(data);
};
