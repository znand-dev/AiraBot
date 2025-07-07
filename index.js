const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot ready! ✅');
});

client.on('message', async msg => {
    if (!msg.body.startsWith("!")) return;

    const args = msg.body.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`);
        await commandFile.run(client, msg, args);
    } catch (err) {
        console.log("❌ Unknown command:", command);
    }
});

client.initialize();
