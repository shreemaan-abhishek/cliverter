import { Command } from "./Command";

const figlet = require('figlet')

export class HelpCommand implements Command {
  run(): void {
    const cliverterFiglet = figlet.textSync('Cliverter', {
      font: 'Standard',
      horizontalLayout: 'full',
    });
    const helpText = `${cliverterFiglet}\n\nCliverter is a converter app in a command-line.\nusage: cliverter <command>`
    console.log(helpText)
  }
}