const fs = require("fs");
const path = require("path");
const { MessageMedia } = require("whatsapp-web.js");

module.exports = {
    name: "testsend",
    description: "Test kirim file audio dengan MessageMedia",
    async execute(client, msg, args) {
        const filePath = path.resolve("media/test.mp3");

        if (!fs.existsSync(filePath)) {
            return msg.reply("❌ File test.mp3 tidak ditemukan bro!");
        }

        try {
            const media = MessageMedia.fromFilePath(filePath);
            await client.sendMessage(msg.from, media, {
                caption: "✅ Nih bro test audio-nya 🎧",
            });
        } catch (err) {
            console.error("❌ Gagal kirim file:", err);
            msg.reply("❌ Gagal kirim test.mp3");
        }
    }
};
