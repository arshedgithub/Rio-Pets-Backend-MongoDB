import mongoose, { Schema, Document } from 'mongoose';
import { CATEGORY_TYPES, IAd, LOCATIONS } from '../types';

export interface AdDocument extends Omit<IAd, '_id'>, Document {}

const adSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        images: [{ type: String }],
        location: { type:String, enum: Object.values(LOCATIONS), required: true },
        delivery: { type: Boolean, required: true, default: false },
        petType: { type:String, enum: Object.values(CATEGORY_TYPES), required: true },
        seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        featured: { type: Boolean, required: true, default: false },
        available: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<AdDocument>('Ad', adSchema);