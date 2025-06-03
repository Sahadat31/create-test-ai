#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { globby } from "globby";
import fs from "fs-extra";
import dotenv from "dotenv";
import { generateTestFile } from "../lib/testCaseGenerator.js";

dotenv.config();

const program = new Command();
const allowedFrameworks = ["mocha","jasmine","jest","vitest"]
program
  .name("testgen-ai")
  .description("Generate test cases using LLMs")
  .option("-f, --file <path>", "Path to JS/TS/JSX/Vue file")
  .option("-d, --dir <directory>", "Directory to JS/TS/JSX/TSX/Vue files")
  .option("-t, --type <framework>", "Test framework (jest|mocha|chai|pinia)", "jest")
  .option("-k, --key <api_key>", "GROQ API KEY")
  .parse();

const options = program.opts();

if (!options.key) {
  console.error(chalk.red("Error: Please provide groq api key using --key"));
  process.exit(1);
}

if (options.type && !allowedFrameworks.includes(options.type.toLowerCase())) {
  console.error(chalk.red("Error: Supported testing frameworks are jest/mocha/jasmine/vitest. If no type provided it will by default take mocha."));
  process.exit(1);
}
const framework = options.type.toLowerCase()
const apiKey = options.key

const processFile = async (filePath) => {
  try {
    await generateTestFile(filePath, framework, apiKey);
  } catch (err) {
    console.error(chalk.red(`❌ Failed to process ${filePath}: ${err.message}`));
  }
};

if (options.file) {
  if (!fs.existsSync(options.file)) {
    console.error(chalk.red("❌ File does not exist"));
    process.exit(1);
  }
  await processFile(options.file);
} else if (options.dir) {
  if (!fs.existsSync(options.dir)) {
    console.error(chalk.red("❌ Directory does not exist"));
    process.exit(1);
  }

  const files = await globby([
    `${options.dir}/**/*.{js,ts,jsx,vue,tsx}`,
    `!**/*.test.{js,ts}` // ignore test files
  ]);

  if (files.length === 0) {
    console.log(chalk.yellow("⚠️  No matching files found in the directory."));
    process.exit(0);
  }

  for (const file of files) {
    await processFile(file);
  }
} else {
  console.error(chalk.red("❌ Please provide either --file or --dir"));
  process.exit(1);
}
// await generateTestFile(options.file, framework, apiKey);


