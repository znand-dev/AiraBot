const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const { MessageMedia } = require("whatsapp-web.js");

module.exports = {
    name: "play",
    description: "Cari dan kirim lagu dari YouTube",
    async execute(client, msg, args) {
        const query = args.join(" ");
        if (!query) return msg.reply("❌Error: Masukkan judul lagu dulu bre");

        const id = Date.now();
        const outputPath = `media/${id}.mp3`;

        msg.reply("🔍 Nyari & download lagunya dulu ya...");

        // Pakai JSON biar dapet data video
        const cmd = `yt-dlp -x --audio-format mp3 --print-json -o "media/${id}.%(ext)s" "ytsearch1:${query}"`;

        exec(cmd, async (error, stdout, stderr) => {
            if (error) {
                console.error("YT-DLP Error:", stderr);
                return msg.reply("❌Error: Gagal download lagu!");
            }

            let videoInfo = null;
            try {
                videoInfo = JSON.parse(stdout);
            } catch (e) {
                console.error("❌Error: Gagal parse JSON dari yt-dlp:", e);
                return msg.reply("❌Error: Gagal ambil info video.");
            }

            const title = videoInfo.title || query;
            const videoUrl = videoInfo.webpage_url || "https://youtube.com";

            if (!fs.existsSync(outputPath)) {
                return msg.reply("❌Error: File MP3 gak ketemu bro.");
            }

            try {
                const media = MessageMedia.fromFilePath(path.resolve(outputPath));
   
                await client.sendMessage(msg.from, `🎵 *${title}*\n🔗 ${videoUrl}\n\n📺 skutt coba cek lagunya bre`);
                await client.sendMessage(msg.from, media);

                fs.unlinkSync(outputPath); // optional hapus
            } catch (err) {
                console.error("Send error:", err);
                msg.reply("❌ Gagal kirim file audio.");
            }
        });
    }
};
