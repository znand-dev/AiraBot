const playdl = require("play-dl");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");

exports.run = async (client, msg, args) => {
    const query = args.join(" ");
    if (!query) return msg.reply("❗ Masukin judul lagu bro.");

    const yt_info = await playdl.search(query, { limit: 1 });
    if (!yt_info[0]) return msg.reply("❌ Lagu gak ketemu bro.");

    const video = yt_info[0];
    const stream = await playdl.stream(video.url);
    const filename = `media/${Date.now()}.mp3`;
    const output = fs.createWriteStream(filename);

    ffmpeg(stream.stream)
        .audioBitrate(128)
        .saveToFile(filename)
        .on('end', async () => {
            await msg.reply(`🎵 Judul: ${video.title}`);
            await msg.reply(fs.createReadStream(filename), { sendAudioAsVoice: false });
            fs.unlinkSync(filename);
        });
};
