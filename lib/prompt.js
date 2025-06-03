import { jasmineTemplate } from "../templates/jasmine.js";
import { jestTemplate } from "../templates/jest.js";
import { mochaTemplate } from "../templates/mocha.js";
import { VitestTemplate } from "../templates/vitest.js";

export function buildPrompt(code, framework) {
  switch (framework) {
    case "vitest":
        return VitestTemplate(code);
    case "jasmine":
        return jasmineTemplate(code);
    case "jest":
        return jestTemplate(code);
    case "mocha":
    default:
      return mochaTemplate(code);
  }
}
