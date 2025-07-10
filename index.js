require('dotenv').config();

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
    } catch(err) {
      console.warn('⚠️ Gagal parse JSON, fallback ke text biasa');
    }
  }
  return text;
}

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => qrcode.generate(qr, { small: true }));
client.on('ready', () => console.log('Bot ready! ✅'));

const commands = new Map();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
}

client.on('message', async msg => {
    if (!msg.body.startsWith("!")) return;
    const args = msg.body.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = commands.get(commandName);

    if (!command) return msg.reply(`❌ Unknown command: ${commandName}`);

    try {
        await command.execute(client, msg, args);
    } catch (err) {
        console.error(`❌ Error di command ${commandName}:`, err);
        msg.reply("❌ Gagal jalanin perintah.");
    }
});

client.initialize(); //
