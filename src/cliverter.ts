import figlet from 'figlet';

import {
	acreToHectare,
	hectareToAcre,
	hectareToMeterSq,
	meterSqToHectare,
	meterSqToSqFeet,
	sqFeetToMeterSq,
} from './converters/area';
import {
	cmToInch,
	inchToCm,
	meterToMile,
	meterToYard,
	mileToMeter,
	yardToMeter,
} from './converters/length';
import { cToF, cToK, fToC, fToK, kToC, kToF } from './converters/temperature';

type conversionFunction = (value: string) => void;

class Command {
	description: string;
	action: conversionFunction;
	constructor(description: string, action: conversionFunction) {
		this.description = description;
		this.action = action;
	}
}

type CommandMap = {
	[key: string]: Command;
};

const supportedCommands: CommandMap = {
	'inch-cm': new Command('Convert inch to centimeters', inchToCm),
	'cm-inch': new Command('Convert centimeters to inch', cmToInch),
	'mile-meter': new Command('Convert miles to meters', mileToMeter),
	'meter-mile': new Command('Convert meters to miles', meterToMile),
	'yard-meter': new Command('Convert yards to meters', yardToMeter),
	'meter-yard': new Command('Convert meters to yards', meterToYard),
	'hectare-metersq': new Command(
		'Convert hectares to meter square',
		hectareToMeterSq
	),
	'metersq-hectare': new Command(
		'Convert meter square to hectares',
		meterSqToHectare
	),
	'hectare-acre': new Command('Convert hectares to acres', hectareToAcre),
	'acre-hectare': new Command('Convert acres to hectares', acreToHectare),
	'sqft-metersq': new Command(
		'Convert square feet to meter square',
		sqFeetToMeterSq
	),
	'metersq-sqft': new Command(
		'Convert meter square to square feet',
		meterSqToSqFeet
	),
	'degf-degc': new Command('Convert fahrenheit to celcius', fToC),
	'degc-degf': new Command('Convert celcius to fahrenheit', cToF),
	'degc-kelvin': new Command('Convert celcius to kelvin', cToK),
	'kelvin-degc': new Command('Convert kelvin to celcius', kToC),
	'degf-kelvin': new Command('Convert fahrenheit to kelvin', fToK),
	'kelvin-degf': new Command('Convert kelvin to fahrenheit', kToF),
};

const helpMessage = () => {
	const cliverterFiglet = figlet.textSync('Cliverter', {
		font: 'Standard',
		horizontalLayout: 'full',
	});
	const helpText = `${cliverterFiglet}\n\nCliverter is a converter app in a command-line.\nusage: cliverter <command>`;
	console.log(helpText);
};

const errorMessage = () => {
	console.log(`Unrecognized command. See 'cliverter --help'`);
};

const args: string[] = process.argv; // Command line arguments
const inputArgs: string[] = args.slice(2); // Remove first two arguments

if (inputArgs.length === 0) {
	helpMessage();
} else if (inputArgs.length > 2) {
	console.log(`Error: Received ${inputArgs.length} arguments but expected 1`);
} else {
	// check if user forgot to mention the input for conversion
	if (
		inputArgs[1] === undefined &&
		inputArgs[0] !== '--help' &&
		supportedCommands[inputArgs[0]]
	) {
		console.log('Nothing specified, nothing converted.');
	} else {
		switch (inputArgs[0]) {
			case '--help':
				helpMessage();
				break;
			case 'inch-cm':
				inchToCm(inputArgs[1]);
				break;
			case 'cm-inch':
				cmToInch(inputArgs[1]);
				break;
			case 'mile-meter':
				mileToMeter(inputArgs[1]);
				break;
			case 'meter-mile':
				meterToMile(inputArgs[1]);
				break;
			case 'yard-meter':
				yardToMeter(inputArgs[1]);
				break;
			case 'meter-yard':
				meterToYard(inputArgs[1]);
				break;
			case 'metersq-hectare':
				meterSqToHectare(inputArgs[1]);
				break;
			case 'hectare-metersq':
				hectareToMeterSq(inputArgs[1]);
				break;
			case 'hectare-acre':
				hectareToAcre(inputArgs[1]);
				break;
			case 'acre-hectare':
				acreToHectare(inputArgs[1]);
				break;
			case 'sqft-metersq':
				sqFeetToMeterSq(inputArgs[1]);
				break;
			case 'metersq-sqft':
				meterSqToSqFeet(inputArgs[1]);
				break;
			case 'degf-degc':
				fToC(inputArgs[1]);
				break;
			case 'degc-degf':
				cToF(inputArgs[1]);
				break;
			case 'degc-kelvin':
				cToK(inputArgs[1]);
				break;
			case 'kelvin-degc':
				kToC(inputArgs[1]);
				break;
			case 'degf-kelvin':
				fToK(inputArgs[1]);
				break;
			case 'kelvin-degf':
				kToF(inputArgs[1]);
				break;
			default:
				errorMessage();
		}
	}
}
