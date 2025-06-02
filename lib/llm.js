import axios from "axios";

export async function callLLM(prompt,api_key) {
  const apiKey = api_key || process.env.GROQ_API_KEY;
  const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
  const response = await axios.post(
    GROQ_API_URL,
    {
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: "You write unit tests for provided JavaScript code with 100% coverage." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 1000
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.choices[0].message.content.trim();
}
