// https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array
export function getMultipleRandom<Type>(arr: Type[], num: number): Type[] {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());

	return shuffled.slice(0, num);
}
