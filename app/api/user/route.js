import { getAuth } from "@clerk/nextjs/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  await dbConnect();

  try {
    const { name, email, clerkId } = await request.json();

    let user = await User.findOne({ clerkId });

    if (user) {
      // Update existing user
      user.name = name;
      user.email = email;
      await user.save();
    } else {
      // Create new user
      user = new User({
        clerkId,
        name,
        email,
      });
      await user.save();
    }

    return new Response(JSON.stringify({ message: 'User saved successfully', user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving user:', error);
    return new Response(JSON.stringify({ error: 'Error saving user' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}