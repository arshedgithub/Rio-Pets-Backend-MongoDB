import mongoose, { Schema, Document } from 'mongoose';
import { CATEGORY_TYPES, ICategory } from '../types';

export interface CategoryDocument extends Omit<ICategory, '_id'>, Document {}

const categorySchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: Object.values(CATEGORY_TYPES), required: true },
});

export default mongoose.model<CategoryDocument>('Category', categorySchema);