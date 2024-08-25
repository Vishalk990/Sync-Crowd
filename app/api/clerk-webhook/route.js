import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { saveUserToDatabase } from '@/lib/db'

export async function POST(req) {
  console.log('Webhook received'); // Log when the webhook is hit

  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
  if (!WEBHOOK_SECRET) {
    console.error('WEBHOOK_SECRET is not set');
    return new Response('Error occurred -- WEBHOOK_SECRET not set', {
      status: 500,
    })
  }


  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");


  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error('Missing svix headers');
    return new Response('Error occurred -- no svix headers', {
      status: 400,
    })
  }

  console.log('Headers verified');

  let payload;
  try {
    payload = await req.json()
    console.log('Received payload:', JSON.stringify(payload, null, 2));
  } catch (error) {
    console.error('Error parsing request body:', error);
    return new Response('Error parsing request body', { status: 400 })
  }

  const body = JSON.stringify(payload)


  const wh = new Webhook(WEBHOOK_SECRET)
  let evt;


  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) 
    console.log('Webhook verified');
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occurred during webhook verification', {
      status: 400,
    })
  }

  // Handle the webhook
  const { id } = evt.data
  const eventType = evt.type
  console.log(`Processing webhook with ID ${id} and type ${eventType}`);

  if (eventType === 'user.created' || eventType === 'user.updated') {
    try {
      const result = await saveUserToDatabase(evt.data)
      console.log("User saved successfully:", result);
      return new Response('User saved successfully', { status: 200 })
    } catch (error) {
      console.error('Error saving user:', error)
      return new Response(`Error saving user: ${error.message}`, { status: 500 })
    }
  } else {
    console.log(`Unhandled event type: ${eventType}`);
  }

  console.log('Webhook processing completed');
  return new Response('Webhook processed', { status: 200 })
}