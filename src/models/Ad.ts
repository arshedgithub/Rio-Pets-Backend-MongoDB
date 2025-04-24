import mongoose, { Schema, Document } from 'mongoose';
import { IAd } from '../types';

export interface AdDocument extends Omit<IAd, '_id'>, Document {}

const adSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        images: [{ type: String }],
        location: { type: String, required: true },
        available: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<AdDocument>('Ad', adSchema);