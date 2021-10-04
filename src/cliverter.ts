import { errorMessage, helpMessage } from "./commands/general";

const figlet = require('figlet');

const args: string[] = process.argv; // Command line arguments
const inputArgs: string[] = args.slice(2); // Remove first two arguments

if(inputArgs.length == 0){
  helpMessage()
} else if (inputArgs.length > 1) {
  console.log(`Error: Received ${inputArgs.length} arguments but expected 1`)
} else {
  switch(inputArgs[0]) {
    case "--help":
     helpMessage();
    default:
     errorMessage();
   }
}