import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const select = data.get('select');
		const oldGame = data.get('game');
		const game = JSON.parse(oldGame);

		return {
			select,
			game
		};
	}
} satisfies Actions;
