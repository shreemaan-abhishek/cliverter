import { Command } from "./commands/Command";
import { ErrorCommand } from "./commands/ErrorCommand";
import { HelpCommand } from "./commands/HelpCommand";

export class CommandFactory {
  getCommand(commandName: string): Command {
   switch(commandName) {
    case "--help":
     return new HelpCommand();
    default:
     return new ErrorCommand();
   }
  }
}