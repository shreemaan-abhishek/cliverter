/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const inchToCm = (value: string) => {
	console.log(2.54 * Number(value));
};

export const cmToInch = (value: string) => {
	console.log(Number(value) / 2.54);
};

export const mileToMeter = (value: string) => {
	console.log(Number(1609.344 * Number(value)));
};

export const meterToMile = (value: string) => {
	console.log(Number(value) / 1609.344);
};
