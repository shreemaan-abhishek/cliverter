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

class Command {
	name: string;
	description: string;
	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}

const supportedCommands: Command[] = [
	new Command('inch-cm', 'Convert inch to centimeters'),
	new Command('cm-inch', 'Convert centimeters to inch'),
	new Command('mile-meter', 'Convert miles to meters'),
	new Command('meter-mile', 'Convert meters to miles'),
	new Command('yard-meter', 'Convert yards to meters'),
	new Command('meter-yard', 'Convert meters to yards'),
	new Command('hectare-metersq', 'Convert hectares to meter square'),
	new Command('metersq-hectare', 'Convert meter square to hectares'),
	new Command('hectare-acre', 'Convert hectares to acres'),
	new Command('acre-hectare', 'Convert acres to hectares'),
	new Command('sqft-metersq', 'Convert square feet to meter square'),
	new Command('metersq-sqft', 'Convert meter square to square feet'),
];

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
		isValidCommand(inputArgs[0])
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
			default:
				errorMessage();
		}
	}
}

function isValidCommand(command: string) {
	let isValid = false;
	supportedCommands.forEach((supportedCommand) => {
		if (supportedCommand.name === command) {
			isValid = true;
			return;
		}
	});
	return isValid;
}
