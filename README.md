## 💫 AiraBot - WhatsApp AI for Fun & Music 🎶

>  *"Hello~ I'm AiraBot, your digital waifu on WhatsApp~"*  
> An anime-style WhatsApp bot that chats with AI, plays music from YouTube, and livens up your group!

---

### Features

- Chat with AI directly from WhatsApp  
- Switch AI models via `.env`  
- Customize AI prompts via `.env`  
- Supports providers: `openai` & `openrouter.ai`  
- Modular command system (`commands/` folder)

For best experience, we recommend using models from **OpenAI** — they are more responsive, intelligent, efficient, and fast.

| Command | Function | Status |
|---------|----------|--------|
| `!ai [message]` | 💬 Chat with AI | Available |
| `!play [song title]` | 🎶 Download and send YouTube audio | Available |
| `!menu` | 📋 View all available commands | Available |
| `!sticker` | 🖼️ Convert image to WA sticker | In development |
| `!joke` | 😂 Send a random joke | In development |
| `!quote` | ✨ Send anime/motivational quote | In development |
| *(and more features coming soon!)* |

---

### Tech Stack

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) – connect to WhatsApp via Web QR  
- `yt-dlp` – fetch audio from YouTube  
- `ffmpeg` – convert audio  
- `dotenv` – store API credentials  
- `OpenAI SDK` – chat GPT integration  

---

### Requirements

- Node.js v18+ ✅  
- A phone with active WhatsApp  
- Account & API key from:
  - [OpenAI](https://platform.openai.com/)
  - or [OpenRouter.ai](https://openrouter.ai/)

---

### Installation Guide

1. **Clone the repo:**

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

3. **Copy the `.env` file and add your API Key:**

```bash
cp .env.example .env
nano .env
```

```env
AI_PROVIDER=openai
AI_API_KEY=sk-xxxxxxx...
AI_MODEL=gpt-4.1-mini
AI_SYSTEM_PROMPT=You are a polite and helpful AI assistant on WhatsApp
PARSE_JSON=false
```

Replace `sk-xxxxxxxxxxxxxxxxxxxx` with your actual API key.

4. **Start the bot:**

```bash
node index.js
```

5. **Scan the QR Code with WhatsApp on your phone**  
Go to WhatsApp > Linked Devices > Scan QR

---

### Example Usage

```
!ai what is a black hole?
!play unspoken - hurts
!joke
!quote
!sticker
```

---

### Troubleshooting

1. If you encounter `need to sign in` error, open YouTube in your browser and export cookies to a `cookies.txt` file in the root directory. Then restart the bot.
2. If the QR Code keeps reappearing after login, delete the `.wwebjsauth` and `.wwebjs_cache` directories.

---

### ⚠ Disclaimer

- ❌ This bot **does NOT use the official WhatsApp Business API**  
- ❌ Do NOT use it for spam or illegal promotions  
- ✅ Suitable for personal and small group usage

---

### Credits

- Built by [znand-dev](https://github.com/znand-dev)  
- Powered by [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)  
- OpenAI via [OpenRouter](https://openrouter.ai)  
- YouTube download via [yt-dlp](https://github.com/yt-dlp/yt-dlp)

---

### License

MIT License – Feel free to fork, modify, and contribute.
