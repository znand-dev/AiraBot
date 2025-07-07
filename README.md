
## 💫 AiraBot - WhatsApp AI for Fun & Music 🎶

>  *"Halo~ Perkenalkan aku AiraBot, waifu digital kamu di WhatsApp~"*  
> Bot WhatsApp anime-style yang bisa ngobrol pakai AI, putar lagu dari YouTube, dan bikin grup kamu makin hidup

---

### Fitur Utama

| Perintah | Fungsi | Keterangan |
|----------|--------|------------|
| `!ai [pesan]` | 💬 Chat bareng AI (openrouter/cypher-alpha:free)  | Tersedia |
| `!play [judul lagu]` | 🎶 Download dan kirim audio dari YouTube  | Tersedia |
| `!menu` | 📋 Lihat semua perintah yang tersedia  | Tersedia |
| `!sticker` | 🖼️ Ubah gambar jadi stiker WA  | Masih tahap development |
| `!joke` | 😂 Kirim lelucon receh  | Masih tahap development |
| `!quote` | ✨ Kutipan anime/motivasi  | Masih tahap development |
| *(dan fitur lainnya akan terus bertambah!)* | 

---

### Teknologi yang Digunakan

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) – koneksi ke WhatsApp via Web QR
- `yt-dlp"` – ambil audio dari YouTube
- `ffmpeg` – konversi audio
- `dotenv` – simpan kredensial API
- `OpenAI SDK` – integrasi chat GPT

---

### Cara Instalasi

1. **Clone repo-nya:**

```bash
git clone https://github.com/znand-dev/AiraBot.git)
cd AiraBot
```

2. **Install dependencies:**

```bash
npm install
```

```bash
chmod +x install-deps.sh
./install-deps.sh
sudo apt install ffmpeg -y
pip install yt-dlp
```

3. **Salin file `.env` dan isi API Key:**

```bash
cp .env.example .env
nano .env
```

Format `.env` :
```
OPENROUTER_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```

Sesuaikan `sk-xxxxxxxxxxxxxxxxxxxx` dengan API_Key kalian

4. **Jalankan bot-nya:**

```bash
node index.js
```

5. **Scan QR Code pakai WhatsApp di HP**  
Masuk ke WhatsApp > Perangkat tertaut > Scan QR

---

### Contoh Penggunaan

```
!ai apa itu lubang hitam?
!play unspoken - hurts
!joke
!quote
!sticker
```

---

### ⚠Disclaimer

- ❌ Bot ini **tidak menggunakan WhatsApp Business API resmi**  
- ❌ Jangan digunakan untuk spam atau promosi ilegal
- ✅ Cocok untuk penggunaan pribadi dan grup kecil

---
### Credits

- Built by [znand-dev](https://github.com/znand-dev)
- Powered by [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- OpenAI via [OpenRouter](https://openrouter.ai)
- YouTube download via [yt-dlp](https://github.com/yt-dlp/yt-dlp)

---

### License

MIT License – Feel free to fork, modify, and contribute.

