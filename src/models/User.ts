import mongoose, { Schema, Document } from 'mongoose';
import { IUser, USER_ROLES } from '../types';

export interface UserDocument extends Omit<IUser, '_id'>, Document {}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(USER_ROLES), default: 'buyer' },
    phone: String,
    location: String,
  },
  { timestamps: true }
);

export default mongoose.model<UserDocument>('User', userSchema);