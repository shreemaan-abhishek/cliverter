import { CommandFactory } from "./CommandFactory";

const figlet = require('figlet');

const args: string[] = process.argv; // Command line arguments
const inputArgs: string[] = args.slice(2); // Remove first two arguments

const factoryObject = new CommandFactory();

if(inputArgs.length == 0){
  const commandObject = factoryObject.getCommand("--help");
  commandObject.run();
} else if (inputArgs.length > 1) {
  console.log(`Error: Received ${inputArgs.length} arguments but expected 1`)
} else {
  const commandObject = factoryObject.getCommand(inputArgs[0]);
  commandObject.run();
}