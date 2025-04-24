import mongoose, { Schema, Document } from 'mongoose';
import { CategoryTypes, ICategory } from '../types';

export interface CategoryDocument extends Omit<ICategory, '_id'>, Document {}

const categorySchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: CategoryTypes, required: true },
});

export default mongoose.model<CategoryDocument>('Category', categorySchema);