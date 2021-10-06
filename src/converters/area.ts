/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const hectareToMeterSq = (value: string) => {
	console.log(Number(10000 * Number(value)));
};

export const meterSqToHectare = (value: string) => {
	console.log(Number(Number(value) / 10000));
};

export const hectareToAcre = (value: string) => {
	console.log(Number(2.47105 * Number(value)));
};

export const acreToHectare = (value: string) => {
	console.log(Number(Number(value) / 2.47105));
};

export const sqFeetToMeterSq = (value: string) => {
	console.log(Number(Number(value) / 10.7639));
};

export const meterSqToSqFeet = (value: string) => {
	console.log(Number(Number(value) * 10.7639));
};
