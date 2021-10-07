/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const fToC = (value: string) => {
	console.log(((Number(value) - 32) * 5) / 9);
};

export const cToF = (value: string) => {
	console.log((Number(value) * 9) / 5 + 32);
};

export const cToK = (value: string) => {
	console.log(Number(value) + 273.15);
};

export const kToC = (value: string) => {
	console.log(Number(value) - 273.15);
};

export const fToK = (value: string) => {
	console.log(((Number(value) - 32) * 5) / 9 + 273.15);
};

export const kToF = (value: string) => {
	console.log(((Number(value) - 273.15) * 9) / 5 + 32);
};
