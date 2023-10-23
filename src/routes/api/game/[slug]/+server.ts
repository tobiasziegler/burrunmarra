import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { games } from '$lib/games';

export const GET: RequestHandler = ({ params }) => {
	const index = games.findIndex((g) => g.slug === params.slug);
	const data = games[index];

	return json(data);
};
