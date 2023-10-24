// NB: Building game logic initially using numbers - will switch to proper language-based
// data later
export interface Game {
	slug: string;
	name: string;
	items: number[];
	target?: number;
}

export const games = [
	{
		slug: 'numbers',
		name: 'Numbers',
		items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	}
];
