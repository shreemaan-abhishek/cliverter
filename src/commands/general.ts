import figlet from 'figlet';

export const errorMessage = () => {
	console.log(`Unrecognized command. See 'cliverter --help'`);
};

export const helpMessage = () => {
	const cliverterFiglet = figlet.textSync('Cliverter', {
		font: 'Standard',
		horizontalLayout: 'full',
	});
	const helpText = `${cliverterFiglet}\n\nCliverter is a converter app in a command-line.\nusage: cliverter <command>`;
	console.log(helpText);
};
