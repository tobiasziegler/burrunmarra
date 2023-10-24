import type { Actions } from './$types';

import type { Game } from '$lib/games';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const select = data.get('select');
		const oldGame = data.get('game');
		const game: Game = JSON.parse(oldGame);

		return {
			select,
			game
		};
	}
} satisfies Actions;
