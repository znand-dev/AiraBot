// lib/aiClient.js
const { OpenAI } = require('openai');

const baseURL =
  process.env.AI_PROVIDER === 'openrouter'
    ? 'https://openrouter.ai/api/v1'
    : undefined;

if (!process.env.AI_API_KEY) {
  throw new Error('❌ AI_API_KEY belum diset di .env');
}

const aiClient = new OpenAI({
  apiKey: process.env.AI_API_KEY,
  baseURL, 
});

module.exports = {
  aiClient,
};
