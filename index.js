const { Client, GatewayIntentBits } = require('discord.js');

const tokenHex = process.env.DISCORD_TOKEN_HEX;
if (!tokenHex) {
  console.error('DISCORD_TOKEN_HEX belum di-set!');
  process.exit(1);
}

// decode hex -> token asli (user nggak perlu lihat token plain)
const token = Buffer.from(tokenHex, 'hex').toString('utf8');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
  console.log(`Login sebagai ${client.user.tag}`);
  try {
    await client.application.edit({ description: 'halo everyone' });
    console.log('✅ Description berhasil diubah: "halo everyone"');
    client.destroy();
    process.exit(0);
  } catch (err) {
    console.error('❌ Gagal ubah description:', err.message);
    client.destroy();
    process.exit(1);
  }
});

client.login(token);
