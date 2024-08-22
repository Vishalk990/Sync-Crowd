import mongoose from 'mongoose';

const ClassificationSchema = new mongoose.Schema({
    texts: {
        type: [String],
        required: true,
    },
    classes: {
        type: [String],
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    answers: {
        type: [[String]], // Array of arrays of strings
        default: [],
    },
    result: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Export the Classification model if it already exists, otherwise create it
const Classification = mongoose.models.Classification || mongoose.model('Classification', ClassificationSchema);

export default Classification;