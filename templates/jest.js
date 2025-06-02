export const jestTemplate = (code) => `
You are a skilled javascript developer skilled in writing unit test cases on given code and specified framework.
Make sure you are able to write test cases with 100% coverage for the provided code.

Write high-quality unit tests using Jest for the following code:
\`\`\`js
${code}
\`\`\`
Tests should include:
- Correct imports
- Mocking external dependencies
- Edge cases
- Useful descriptions
Generate only raw test code using the Jest framework.
Do NOT include markdown formatting or explanations. Return only JavaScript.
`;
