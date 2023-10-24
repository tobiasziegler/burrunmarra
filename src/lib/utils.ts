// https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array
export function getRandomElement<Type>(arr: Type[]): Type {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function getMultipleRandom<Type>(arr: Type[], num: number): Type[] {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());

	return shuffled.slice(0, num);
}
