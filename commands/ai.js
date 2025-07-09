// commands/ai.js
const { aiClient } = require('../lib/aiClient');

module.exports = {
  name: "ai",
  description: "Ngobrol bareng AI",
  async execute(client, msg, args) {
    const prompt = args.join(" ");
    if (!prompt) return msg.reply("❌Error: Masukin teks dong buat ngobrol ama AI");

    try {
      const response = await aiClient.chat.completions.create({
        model: process.env.AI_MODEL,
        messages: [
          {
            role: "system",
            content: process.env.AI_SYSTEM_PROMPT, // ⬅️ Pure dari .env, tanpa default
          },
          { role: "user", content: prompt },
        ],
      });

      const reply = response.choices[0].message.content;
      await msg.reply(`🧠 ${reply}`);
    } catch (err) {
      console.error("❌ Error AI:", err);
      await msg.reply("❌ Error cuyy, AI-nya lagi mabok.");
    }
  },
};
