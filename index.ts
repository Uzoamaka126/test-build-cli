#!/usr/bin/env node

// entry point from where you can start building stuff out
import { Command } from 'commander';

// Declare the program
const program = new Command();

// Add actions onto the CLI
// program
//     .name("string-util")
//     .argument("<string>", "string to log")
//     .description('CLI to some JS string utilities')
//     .version('0.8.0')
//     .action((message: string) => {
//     console.log(`Hello ${message}!!!`);  
// });

program
    .argument("<string>", "string to log")
    .option("-c, --capitalize", "Capitalize the message")
    .description('CLI to some JS string utilities')
    // .version('0.0.1')
    .action((
        message: string, 
        options: { capitalize?: boolean } 
    ) => {
        if (options.capitalize) {
            console.log(message.toUpperCase());
        } else {
            console.log(message);
        }
    });

program
    .command("add <numbers>")
    .action((numbers: number[]) => {
        const total = numbers.reduce((a, b) => a + b, 0);
        console.log(`Total: ${total}`);
    })
    .description("Add numbers and log the total")


program
    .command("get-max-number <numbers>")
    .action((numbers: number[]) => {
        const max = Math.max(...numbers)
        console.log(`Max: ${max}`);
    })
    .description("Get a max number from an array of numbers")

// Execute the CLI with the given arguments
program.parse(process.argv);

