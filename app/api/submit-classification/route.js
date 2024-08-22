import dbConnect from '@/utils/dbConnect';
import { auth } from '@clerk/nextjs/server';
import Classification from '@/models/Classification';

export async function POST(request) {
    try {
        // Connect to the database using dbConnect
        await dbConnect();

        // Parse JSON body from the request
        const { textSnippets, categories } = await request.json();

        // Authenticate the user via Clerk
        const { userId: clerkUserId } = auth();
        if (!clerkUserId) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Validate input data
        if (!Array.isArray(textSnippets) || !Array.isArray(categories) || textSnippets.length === 0 || categories.length === 0) {
            return new Response(JSON.stringify({ error: 'Invalid input data' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Insert classification data into the database
        const classification = new Classification({
            texts: textSnippets,
            classes: categories,
            userID: clerkUserId,
            answers: Array(textSnippets.length).fill([]),
            result: Array(textSnippets.length).fill(null)
        });

        // Save the classification document
        await classification.save();

        // Respond with success and the inserted document's ID
        return new Response(JSON.stringify({ message: 'Data submitted successfully', id: classification._id }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error submitting classification:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
