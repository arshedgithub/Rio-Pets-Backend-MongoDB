import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../interfaces';

export interface UserDocument extends Omit<IUser, '_id'>, Document {}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Seller', 'Buyer'], default: 'Buyer' },
    phone: String,
    location: String,
  },
  { timestamps: true }
);

export default mongoose.model<UserDocument>('User', userSchema);