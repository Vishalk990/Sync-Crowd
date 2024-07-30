import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    clerkId: { 
        type: String, 
        unique: true, 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
    // Add other sample attributes
    age: { type: Number },
    location: { type: String },
    joinedAt: { 
        type: Date, 
        default: Date.now 
    },
});

export default mongoose.models.User || mongoose.model('User', userSchema);