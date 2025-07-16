const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

module.exports = {
  name: "play",
  description: "Cari dan kirim lagu dari YouTube",
  async execute(client, msg, args) {
    const query = args.join(" ");
    if (!query) return client.sendText(msg.from, "❌ Masukkan judul lagu dulu bre");

    const id = Date.now();
    const outputPath = `media/${id}.mp3`;

    await client.sendText(msg.from, "🔍 Nyari & download lagunya dulu ya...");

    const useCookies = fs.existsSync("cookies.txt");
    const cookiesOption = useCookies ? `--cookies cookies.txt` : "";

    const cmd = `yt-dlp -x ${cookiesOption} --audio-format mp3 --print-json -o "media/${id}.%(ext)s" "ytsearch1:${query}"`;

    exec(cmd, async (error, stdout, stderr) => {
      if (error) {
        console.error("YT-DLP Error:", stderr);
        return client.sendText(msg.from, "❌ Gagal download lagu!");
      }

      let videoInfo;
      try {
        videoInfo = JSON.parse(stdout);
      } catch (e) {
        console.error("❌ Gagal parse JSON dari yt-dlp:", e);
        return client.sendText(msg.from, "❌ Gagal ambil info video.");
      }

      const title = videoInfo.title || query;
      const videoUrl = videoInfo.webpage_url || "https://youtube.com";

      if (!fs.existsSync(outputPath)) {
        return client.sendText(msg.from, "❌ File MP3 gak ketemu bro.");
      }

      const fileSizeMB = fs.statSync(outputPath).size / (1024 * 1024);
      if (fileSizeMB > 16) {
        return client.sendText(msg.from, `⚠️ Ukuran file ${fileSizeMB.toFixed(2)}MB terlalu besar, maksimal 16MB bro.`);
      }

      try {
        await client.sendText(msg.from, `🎵 *${title}*\n🔗 ${videoUrl}\n\n📥 Kirim lagunya...`);
        await client.sendFile(msg.from, path.resolve(outputPath), 'lagu.mp3', `🎶 ${title}`);
        fs.unlinkSync(outputPath);
      } catch (err) {
        console.error("❌ Gagal kirim file:", err);
        client.sendText(msg.from, "❌ Gagal kirim file audio.");
      }
    });
  },
};
