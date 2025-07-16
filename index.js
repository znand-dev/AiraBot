require('dotenv').config();
const wppconnect = require('@wppconnect-team/wppconnect');
const fs = require('fs');
const path = require('path');

const {
  AI_PROVIDER,
  AI_MODEL,
  AI_API_KEY,
  AI_SYSTEM_PROMPT,
  PARSE_JSON
} = process.env;

if (!AI_API_KEY) {
  console.error('❌ Error: API key belum diset di .env');
  process.exit(1);
}

const { aiClient } = require('./lib/aiClient');

function safeParse(text) {
  if (PARSE_JSON === 'true') {
    try {
      return JSON.parse(text);
    } catch (err) {
      console.warn('⚠️ Gagal parse JSON, fallback ke text biasa');
    }
  }
  return text;
}

// Load command files
const commands = new Map();
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.set(command.name, command);
}

// Inisialisasi wppconnect
wppconnect.create({
  session: 'AiraBot',
  catchQR: (base64Qr, asciiQR) => {
    console.log(asciiQR);
  },
  statusFind: (statusSession, session) => {
    console.log(`💡 Status sesi ${session}: ${statusSession}`);
  },
  headless: true,
  browserArgs: ['--no-sandbox'],
  waitForLogin: true,
}).then((client) => {
  console.log("✅ Bot ready!");

  client.onMessage(async (message) => {
    if (!message.body.startsWith("!")) return;

    const args = message.body.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = commands.get(commandName);

    if (!command) {
      await client.sendText(message.from, `❌ Unknown command: ${commandName}`);
      return;
    }

    try {
      await command.execute(client, message, args);
    } catch (err) {
      console.error(`❌ Error di command ${commandName}:`, err);
      await client.sendText(message.from, "❌ Gagal jalanin perintah.");
    }
  });
});
