# create-unit-test-ai
A NPM PACKAGE TO CREATE TEST CASES OF YOUR PREFEREED FRAMEWORK USING LLM

# 🧪 create-unit-test-ai

**create-unit-test-ai** is a CLI tool that uses LLMs (Large Language Models) to auto-generate unit tests for JavaScript, TypeScript, JSX, and Vue files. It supports modern testing frameworks like **Jest**, **Mocha/Chai**, and **Vitest**.

---
## Create a groq api key by going to https://console.groq.com/keys
## 📦 Installation
install globally

```bash
npm install -g create-unit-test-ai
create-unit-test-ai --file path/to/code.js --type jest/mocha/vitest --key groq_api_key
```

install as dev dependency
```bash
npm install --save-dev create-unit-test-ai
npm create-unit-test-ai --file path/to/code.js --type jest/mocha/vitest --key groq_api_key
```


## For now the package only suppoets .js/.ts/.vue/.jsx files and mocha/jest/vitest frameworks. More are WIP.