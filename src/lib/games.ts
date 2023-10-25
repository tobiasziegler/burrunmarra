// NB: Building game logic initially using numbers - will switch to proper language-based
// data later
export interface Item {
	wiradjuri: string;
	english: string;
}

export interface Game {
	slug: string;
	name: string;
	items: Item[];
	target?: number;
}

export const games: Game[] = [
	{
		slug: 'nouns',
		name: 'Nouns',
		items: [
			{ wiradjuri: 'bulanbulan', english: 'Crimson Rosella' },
			{ wiradjuri: 'mulbirrang', english: 'Eastern Rosella' },
			{ wiradjuri: 'gurawiny', english: 'flowers' },
			{ wiradjuri: 'yinaa', english: 'woman' },
			{ wiradjuri: 'dhindha', english: 'ball' },
			{ wiradjuri: 'galigal', english: 'knife' },
			{ wiradjuri: 'garba', english: 'fork' },
			{ wiradjuri: 'dyumbag', english: 'sheep' },
			{ wiradjuri: 'ngamu', english: 'milk' },
			{ wiradjuri: 'yurung', english: 'rain' },
			{ wiradjuri: 'wuba', english: 'hollow' },
			{ wiradjuri: 'dyirribang', english: 'old man' }
		]
	}
];
