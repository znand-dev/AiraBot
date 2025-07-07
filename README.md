
# 💫 AiraBot - WhatsApp AI Waifu for Fun & Music 🎶

> 💕 *"Hai~ Aku AiraBot, waifu digital kamu di WhatsApp~"*  
> Bot WhatsApp anime-style yang bisa ngobrol pakai AI, putar lagu dari YouTube, dan bikin grup kamu makin hidup

---

## Fitur Utama

| Perintah | Fungsi |
|----------|--------|
| `!ai [pesan]` | 💬 Chat bareng AI (GPT-3.5/GPT-4 via OpenAI)  |
| `!play [judul lagu]` | 🎶 Download dan kirim audio dari YouTube  |
| `!menu` | 📋 Lihat semua perintah yang tersedia  |
| `!sticker` | 🖼️ Ubah gambar jadi stiker WA  |
| `!joke` | 😂 Kirim lelucon receh  |
| `!quote` | ✨ Kutipan anime/motivasi  |
| *(dan fitur lainnya akan terus bertambah!)* |

---

## Teknologi yang Digunakan

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) – koneksi ke WhatsApp via Web QR
- `play-dl` – ambil audio dari YouTube
- `ffmpeg` – konversi audio
- `dotenv` – simpan kredensial API
- `OpenAI SDK` – integrasi chat GPT

---

## Cara Instalasi

1. **Clone repo-nya:**

```bash
git clone https://github.com/znand-dev/airabot.git
cd airabot
```

2. **Install dependencies:**

```bash
npm install
```

3. **Salin file `.env` dan isi API Key:**

```bash
cp .env.example .env
```

Format `.env` :
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```

Sesuaikan `sk-xxxxxxxxxxxxxxxxxxxx` dengan API_Key kalian

4. **Jalankan bot-nya:**

```bash
node index.js
```

5. **Scan QR Code pakai WhatsApp di HP**  
Masuk ke WhatsApp > Perangkat tertaut > Scan QR

---

## 💡 Contoh Penggunaan

```
!ai apa itu lubang hitam?
!play unspoken - hurts
!joke
!quote
!sticker
```

---

## ⚠️ Disclaimer

- ❌ Bot ini **tidak menggunakan WhatsApp Business API resmi**  
- ❌ Jangan digunakan untuk spam atau promosi ilegal
- ✅ Cocok untuk penggunaan pribadi dan grup kecil

---

## License

MIT License – Feel free to fork, modify, and contribute.

