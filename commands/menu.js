// commands/menu.js

module.exports = {
  name: 'menu',
  description: '📜 Menampilkan daftar perintah yang tersedia',
  async execute(client, message, args) {
    const menuText = `
📱 *AiraBot Menu* 🎶

🧠 *AI Chat*:
- \`!ai [pesan]\` → ngobrol sama AI

🎵 *Musik*:
- \`!play [judul lagu]\` → download & kirim lagu YouTube

📜 *Menu*:
- \`!menu\` → tampilkan menu ini

`;

    message.reply(menuText);
  }
};

