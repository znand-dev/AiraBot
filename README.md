
## 💫 AiraBot - WhatsApp AI for Fun & Music 🎶

>  *"Halo~ Perkenalkan aku AiraBot, waifu digital kamu di WhatsApp~"*  
> Bot WhatsApp anime-style yang bisa ngobrol pakai AI, putar lagu dari YouTube, dan bikin grup kamu makin hidup

---

### Fitur

- Chatting dengan AI langsung dari WhatsApp
- Bisa ganti model AI via `.env`
- Prompt AI bisa dikustom lewat `.env`
- Mendukung provider: `openai` & `openrouter.ai`
- Modular command system (`commands/` folder)

Untuk pemilihan model AI, saya sarankan gunakan model AI dari OpenAI. Karena lebih responsif, cerdas, hemat dan cepat.

| Perintah | Fungsi | Keterangan |
|----------|--------|------------|
| `!ai [pesan]` | 💬 Chat bareng AI | Tersedia |
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

### Persyaratan

- Node.js v18+ ✅
- HP dengan WhatsApp aktif
- Akun & API key dari:
  - [OpenAI](https://platform.openai.com/)
  - atau [OpenRouter.ai](https://openrouter.ai/)
    
---

### Cara Instalasi

1. **Clone repo-nya:**

```bash
git clone https://github.com/znand-dev/AiraBot.git
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

```nano
AI_PROVIDER=openai
AI_API_KEY=sk-xxxxxxx...
AI_MODEL=gpt-4.1-mini
AI_SYSTEM_PROMPT=Kamu adalah asisten AI khusus di WhatsApp yang sopan dan helpful
PARSE_JSON=false
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
### Perbaikan masalah

1. Jika kamu mengalami masalah saat start, berupa `need to sign in` silakan buka yt di https://youtube.com dan export cookies ke cookies.txt di root directory, lalu restart kembali.
2. Jika kamu mengalami masalah saat start `node index.js` berupa QR Code kembali muncul padahal sebelumnya sudah login.
ssilakan hapus `.wwebjsauth` dan `.wwebjs_cache`

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

