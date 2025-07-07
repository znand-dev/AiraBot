const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.run = async (client, msg, args) => {
    const prompt = args.join(" ");
    if (!prompt) return msg.reply("❗ Tulis pesan dulu bro");

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4", // atau gpt-3.5-turbo kalau gpt-4 mahal
            messages: [{ role: "user", content: prompt }],
        });

        msg.reply("🧠 " + response.choices[0].message.content);
    } catch (err) {
        msg.reply("⚠️ Gagal respon, cek API key bro");
        console.log(err.message);
    }
};
