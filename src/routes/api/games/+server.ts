import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { games } from '$lib/games';

export const GET: RequestHandler = () => {
	const data = games.map((game) => {
		const { slug, name } = game;
		return { slug, name };
	});

	return json(data);
};
