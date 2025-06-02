import fs from "fs-extra";
import { buildPrompt } from "./prompt.js";
import { callLLM } from "./llm.js";
import prettier from "prettier";

export async function generateTestFile(filePath, framework, api_key) {
    try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        const prompt = buildPrompt(fileContent, framework);
        const testCode = await callLLM(prompt,api_key);
      
        const formatted = await prettier.format(testCode, { parser: "babel" });
        const testFilePath = filePath.replace(/\.(jsx?|tsx?|vue)$/, ".test.js");
      
        await fs.writeFile(testFilePath, formatted);
        console.log(`✅ Test file generated: ${testFilePath}`);   
    } catch (err) {
        console.log(`Error occurred ${err.message}`)
    }
}
