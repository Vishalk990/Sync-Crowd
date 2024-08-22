import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { saveUserToDatabase } from '@/lib/db'  

export const config = {
  api: {
    bodyParser: false,
  }
}

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response(JSON.stringify({ error: 'Missing svix headers' }), { status: 400 });
  }

  const payload = await req.text()
  const body = JSON.parse(payload)

  const wh = new Webhook(WEBHOOK_SECRET)

  try {
    wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 400 });
  }

  const { type, data } = body

  if (type === 'user.created' || type === 'user.updated') {
    try {
      await saveUserToDatabase(data)
      return new Response(JSON.stringify({ message: 'User saved successfully' }), { status: 200 });
    } catch (error) {
      console.error('Error saving user:', error)
      return new Response(JSON.stringify({ error: 'Error saving user' }), { status: 500 });
    }
  }

  return new Response(JSON.stringify({ message: 'Webhook received' }), { status: 200 });
}