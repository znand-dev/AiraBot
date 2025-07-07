// commands/ai.js
const { OpenAI } = require('openai');
const fs = require('fs');

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY, // Ambil dari .env
  baseURL: 'https://openrouter.ai/api/v1',
});

module.exports = {
  name: "ai",
  description: "Ngobrol bareng AI",
  async execute(client, msg, args) {
    const prompt = args.join(" ");
    if (!prompt) return msg.reply("❌ Masukin teks dong buat ngobrol!");

    try {
      const completion = await openai.chat.completions.create({
        model: "openrouter/cypher-alpha:free",
        messages: [
          { role: "system", content: "Lo adalah AI yang gaul dan nyantai banget kayak anak tongkrongan. Sertakan emote-emote juga dan nyambung" },
          { role: "user", content: prompt }
        ],
      });

      const reply = completion.choices[0].message.content;
      await msg.reply(`🧠 ${reply}`);
    } catch (err) {
      console.error("❌ AI Error:", err);
      await msg.reply("❌ Ada error bro pas manggil AI.");
    }
  },
};
