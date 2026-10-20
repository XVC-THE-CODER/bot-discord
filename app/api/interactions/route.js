import { InteractionType, InteractionResponseType, verifyKey } from 'discord-interactions';
export const runtime = 'nodejs';

export async function POST(request) {
  const publicKey = process.env.DISCORD_PUBLIC_KEY;
  const signature = request.headers.get('x-signature-ed25519');
  const timestamp = request.headers.get('x-signature-timestamp');
  const rawBody = await request.text();

  const isValid = await verifyKey(rawBody, signature, timestamp, publicKey);
  if (!isValid) return new Response('invalid', { status: 401 });

  const interaction = JSON.parse(rawBody);

  if (interaction.type === InteractionType.PING) {
    return Response.json({ type: InteractionResponseType.PONG });
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    if (interaction.data.name === 'ping') {
      return Response.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: 'Pong! Bot hidup di Vercel 🏓' }
      });
    }
    if (interaction.data.name === 'halo') {
      return Response.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: 'Halo! Aku jalan tanpa terminal 😎' }
      });
    }
  }
  return Response.json({ error: 'unknown' }, { status: 400 });
}
