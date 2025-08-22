const aplhabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

export function unscramble(target: string[], i: number) {
	const jumbled = target.map((char) => {
		if (char === ' ') return char;
		return aplhabet[Math.floor(Math.random() * aplhabet.length)];
	});
	// return [...jumbled.slice(0, target.length - i), ...target.slice(-i, -1)].join('')
	const title = [...target.slice(0, i), ...jumbled.slice(0, target.length - i)].join('');
	return `<span class="active-text">${title.substring(0, i)}</span>${title.substring(i)}`;
}

export const manageAnimation = () => {
	let currentId = 0;
	const reset = () => {
		cancelAnimationFrame(currentId);
		currentId = 0;
	};
	const setId = (uid: number) => {
		currentId = uid;
	};
	const getId = () => {
		return currentId;
	};
	return [getId, reset, setId] as const;
};

export function initalise($el: any, focus: string) {
	const t = Object.values($el.children).find(({ className }) => {
		const options = className.split(' ');
		return options.includes(focus);
	});
	const target = t.innerText.split('');
	const animate = anagramise(t, target);
	const useAnimationHook = manageAnimation();
	return () => {
		const [getId, reset, setId] = useAnimationHook;
		if (!getId()) setId(requestAnimationFrame((time) => animate(time, reset)));
	};
}
const framerate = (speed) => {
	let elapsed = 0;
	let prev = 0;
	return (timestamp: number) => {
		if (!timestamp) {
			elapsed = 0;
			prev = 0;
			return;
		}
		if (prev) elapsed += timestamp - prev;
		prev = timestamp;
		return elapsed > speed;
	};
};
// runs on frame
export function anagramise(el: any, tgt: string[]) {
	let current = 0;
	const nextRender = framerate(20);
	const animate = (j: number, reset: () => void) => {
		if (nextRender(j)) {
			el.innerHTML = unscramble(tgt, current);
			current++;
			nextRender(0);
		}
		if (current <= tgt.length) {
			requestAnimationFrame((t) => animate(t, reset));
		} else {
			reset();
			current = 0;
		}
	};
	return animate;
}
