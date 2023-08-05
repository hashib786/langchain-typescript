import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
  openAIApiKey: "YOUR_KEY_HERE",
  temperature: 0.9,
});

const result = await llm.predict(
  "What would be a good company name for a company that makes colorful socks?"
);
// "Feetful of Fun"
