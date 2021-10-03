import { Command } from "./Command";

const figlet = require('figlet')

export class HelpCommand implements Command {
  run(): void {
    const cliverterFiglet = figlet.textSync('Cliverter', {
      font: 'Standard',
      horizontalLayout: 'full',
    });
    const helpText = `${cliverterFiglet}
  
      Cliverter is a converter app in a command-line.
  
      usage:
        cliverter <command>
    `
    console.log(helpText)
  }
}