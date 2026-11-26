const APP_ID = process.env.DISCORD_APP_ID;
const TOKEN = process.env.DISCORD_TOKEN;

const commands = [
  {
    name: "test",
    description: "Test bot",
    type: 1
  }
];

const res = await fetch(`https://discord.com/api/v10/applications/${APP_ID}/commands`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bot ${TOKEN}`
  },
  body: JSON.stringify(commands)
});

const data = await res.json();
console.log(data);