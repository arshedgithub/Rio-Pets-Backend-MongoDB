import { ICategory } from '../types';
import Category, { CategoryDocument } from '../models/Category';

export const getCategories = async (query: any = {}): Promise<CategoryDocument[]> => {
  return Category.find(query).sort({ createdAt: -1 });
};

export const getCategoryById = async (id: string): Promise<CategoryDocument | null> => {
  return Category.findById(id);
};

export const createCategory = async (categoryData: ICategory): Promise<CategoryDocument> => {
  const category = new Category(categoryData);
  await category.save();
  return category;
};

export const updateCategory = async (id: string, updateData: Partial<ICategory>): Promise<CategoryDocument | null> => {
  return Category.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true }
  );
};

export const deleteCategory = async (id: string): Promise<CategoryDocument | null> => {
  
  // Before deletion, we should check if there are any ads in this category
  // and handle reassignment if needed (implementation depends on your data model)
  
  return Category.findByIdAndDelete(id);
};