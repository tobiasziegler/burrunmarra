import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { games } from '$lib/games';
import { getRandomElement } from '$lib/utils';

export const GET: RequestHandler = ({ params }) => {
	const index = games.findIndex((g) => g.slug === params.slug);
	const gameData = games[index];
	const game = { ...gameData, target: getRandomElement(gameData.items).wiradjuri };

	return json(game);
};
