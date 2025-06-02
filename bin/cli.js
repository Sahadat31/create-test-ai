#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import dotenv from "dotenv";
import { generateTestFile } from "../lib/testCaseGenerator.js";

dotenv.config();

const program = new Command();

program
  .name("testgen-ai")
  .description("Generate test cases using LLMs")
  .option("-f, --file <path>", "Path to JS/TS/JSX/Vue file")
  .option("-t, --type <framework>", "Test framework (jest|mocha|chai|pinia)", "jest")
  .option("-k, --key <api_key>", "GROQ API KEY")
  .parse();

const options = program.opts();
if (!options.file) {
  console.error(chalk.red("Error: Please specify a file path using --file"));
  process.exit(1);
}

if (!options.key) {
  console.error(chalk.red("Error: Please provide groq api key using --key"));
  process.exit(1);
}

await generateTestFile(options.file, options.type, options.key);
