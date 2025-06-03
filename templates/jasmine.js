export const jasmineTemplate = (code) => `
You are a highly skilled JavaScript developer.
Your task is to write unit tests using **Jasmine** and **Karma** for the code below.
Target code:
${code}
Write clean, production-grade unit test cases with full coverage, including:
- All logical branches
- Correct imports
- Mocking (if needed)
- Descriptive test names
Use only JavaScript syntax — DO NOT use markdown, comments, or explanations. DO NOT wrap the code in backticks. 
Return only valid, runnable JavaScript test code.
`;
