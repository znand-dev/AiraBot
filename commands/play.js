const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const { MessageMedia } = require("whatsapp-web.js");

module.exports = {
    name: "play",
    description: "Cari dan kirim lagu dari YouTube",
    async execute(client, msg, args) {
        const query = args.join(" ");
        if (!query) return msg.reply("❌ Masukkan judul lagu dulu bre");

        const id = Date.now();
        const outputPath = `media/${id}.mp3`;

        msg.reply("🔍 Nyari & download lagunya dulu ya...");

        const useCookies = fs.existsSync("cookies.txt");
        const cookiesOption = useCookies ? `--cookies cookies.txt` : "";

        if (!useCookies) {
            console.warn("⚠️ cookies.txt gak ditemukan, lanjut tanpa login.");
        }

        const cmd = `yt-dlp -x ${cookiesOption} --audio-format mp3 --print-json -o "media/${id}.%(ext)s" "ytsearch1:${query}"`;

        exec(cmd, async (error, stdout, stderr) => {
            if (error) {
                console.error("YT-DLP Error:", stderr);
                return msg.reply("❌ Gagal download lagu!");
            }

            let videoInfo = null;
            try {
                videoInfo = JSON.parse(stdout);
            } catch (e) {
                console.error("❌ Gagal parse JSON dari yt-dlp:", e);
                return msg.reply("❌ Gagal ambil info video.");
            }

            const title = videoInfo.title || query;
            const videoUrl = videoInfo.webpage_url || "https://youtube.com";

            if (!fs.existsSync(outputPath)) {
                return msg.reply("❌ File MP3 gak ketemu bro.");
            }

            try {
                const media = MessageMedia.fromFilePath(path.resolve(outputPath));
                await client.sendMessage(msg.from, `🎵 *${title}*\n🔗 ${videoUrl}\n\n📺 Skutt cek lagunya bre`);
                await client.sendMessage(msg.from, media);

                fs.unlinkSync(outputPath); // opsional hapus
            } catch (err) {
                console.error("Send error:", err);
                msg.reply("❌ Gagal kirim file audio.");
            }
        });
    }
};
