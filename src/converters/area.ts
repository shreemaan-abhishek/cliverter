/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const hectareToMeterSq = (value: string) => {
	console.log(Number(10000 * Number(value)));
};

export const meterSqToHectare = (value: string) => {
	console.log(Number(Number(value) / 10000));
};
