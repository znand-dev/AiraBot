// commands/ai.js
const { aiClient } = require('../lib/aiClient');

module.exports = {
  name: "ai",
  description: "Ngobrol bareng AI",
  async execute(client, message, args) {
    const prompt = args.join(" ");
    if (!prompt) {
      return client.sendText(message.from, "❌Error: Masukin teks cuyy buat ngobrol ama AI");
    }

    try {
      const response = await aiClient.chat.completions.create({
        model: process.env.AI_MODEL,
        messages: [
          {
            role: "system",
            content: process.env.AI_SYSTEM_PROMPT,
          },
          { role: "user", content: prompt },
        ],
      });

      const reply = response.choices[0].message.content;
      await client.sendText(message.from, `${reply}`);
    } catch (err) {
      console.error("❌ Error AI:", err);
      await client.sendText(message.from, "❌Error: Reply error cuyy, AI nya lagi mabok.");
    }
  },
};
