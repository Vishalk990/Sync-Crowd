export async function saveUserToDatabase(userData) {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userData.first_name + ' ' + userData.last_name,
        email: userData.email_addresses[0].email_address,
        clerkId: userData.id,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to save user');
    }
  
    return await response.json();
  }