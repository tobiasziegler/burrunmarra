import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { games } from '$lib/games';
import { getRandomElement, getMultipleRandom } from '$lib/utils';

export const GET: RequestHandler = ({ params }) => {
	const index = games.findIndex((g) => g.slug === params.slug);
	const fullGameData = games[index];
	const num = parseInt(params.num);
	const gameData = { ...fullGameData, items: getMultipleRandom(fullGameData.items, num) };
	const game = { ...gameData, target: getRandomElement(gameData.items).wiradjuri };

	return json(game);
};
