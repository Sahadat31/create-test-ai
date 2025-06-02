import { jestTemplate } from "../templates/jest.js";
import { mochaTemplate } from "../templates/mocha.js";
import { VitestTemplate } from "../templates/vitest.js";

export function buildPrompt(code, framework) {
  switch (framework) {
    case "mocha":
        return mochaTemplate(code);
    case "vitest":
        return VitestTemplate(code);
    case "jest":
    default:
      return jestTemplate(code);
  }
}
