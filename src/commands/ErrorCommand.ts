import { Command } from "./Command";

export class ErrorCommand implements Command {
  run(): void {
   console.log(`Unrecognized command. See 'cliverter --help'`);
  }
}