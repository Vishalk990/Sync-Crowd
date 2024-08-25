import mongoose from 'mongoose';

const columnSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['text', 'number', 'date', 'boolean'] },
    required: { type: Boolean, default: false },
    options: [String],
});

const crowdsourceProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    columns: [columnSchema],
    data: [mongoose.Schema.Types.Mixed], 
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.CrowdSource || mongoose.model('CrowdSource', crowdsourceProjectSchema);