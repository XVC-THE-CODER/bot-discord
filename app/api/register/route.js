export const runtime = 'nodejs';

export async function GET() {
  const APP_ID = process.env.DISCORD_APPLICATION_ID;
  const TOKEN = process.env.DISCORD_TOKEN;

  const commands = [
    { name: 'ping', description: 'Cek bot hidup' },
    { name: 'halo', description: 'Sapa bot' }
  ];

  const res = await fetch(`https://discord.com/api/v10/applications/${APP_ID}/commands`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bot ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commands)
  });

  const data = await res.json();
  return Response.json(data);
}
