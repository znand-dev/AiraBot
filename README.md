![Animated](./assets/background8.gif)
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

*Note:*
- Minimum versi nodejs : **v18.20.6**

Jika masih jadul, update dahulu:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

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

6. **Setelah bot ready dan running setelah ditest, silakan edit sesuai user dan workdir kalian dan salin airabot.service ke systemd**
```bash
sudo cp airabot.service /etc/systemd/system/airabot.service
```

Start & Check service:
```bash
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable airabot
sudo systemctl start airabot
```

```bash
sudo systemctl status airabot
```

Jika kalian menemukan error seperti ini:

```
YT-DLP Error: ERROR: [youtube] tOMFR0nQt48: Sign in to confirm you’re not a bot. Use --cookies-from-browser or --cookies for the authentication
```
- silakan kalian buka https://youtube.com kemudian export cookies nya pakai ekstensi dalam format Netscape
- Buat file baru di root directory ```cookies.txt``` lalu paste cookies nya ke file itu
- kemudian edit script commands/play.js dan atur command yt-dlp (tambahkan flag --cookies cookies.txt)
- restart service

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

