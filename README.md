# create-unit-test-ai
A NPM PACKAGE TO CREATE TEST CASES OF YOUR PREFEREED FRAMEWORK USING LLM

# 🧪 create-unit-test-ai

**create-unit-test-ai** is a CLI tool that uses LLMs (Large Language Models) to auto-generate unit tests for JavaScript, TypeScript, JSX, and Vue files. It supports modern testing frameworks like **Jest**, **Mocha/Chai**, **Jasmine** and **Vitest**.

---
## Create a groq api key by going to https://console.groq.com/keys
## 📦 Installation
Install globally

```bash
npm install -g create-unit-test-ai
```
Create test file from a single file
```bash
create-unit-test-ai --file path/to/code.js --type jest/mocha/vitest/jasmine --key groq_api_key
```
Create test file from a directory
```bash
create-unit-test-ai --dir dir/to/files --type jest/mocha/vitest/jasmine --key groq_api_key
```


Install as dev dependency
```bash
npm install --save-dev create-unit-test-ai
```
Create test file from a single file
```bash
npm create-unit-test-ai --file path/to/code.js --type jest/mocha/vitest/jasmine --key groq_api_key
```
Create test file from a directory
```bash
npm create-unit-test-ai --dir dir/to/files --type jest/mocha/vitest/jasmine --key groq_api_key
```

## Arguments passed in CLI
```json
    "--file" : "path to file for which you want to generate test file",
    "--dir"  : "path to directory for which you want to generate test files, sub directories also accounted",
    "--type" : "testing frameworks - required - allowes mocha/jest/vitest/jasmine",
    "--key"  : "groq api key -required"
```

## Advantages
Test files according to your provided framework by one single command.
No need to write test cases manually.
All popular testing frameworks supported.
You can pass whole directory with subdirectories to generate test file.