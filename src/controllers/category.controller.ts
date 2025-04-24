import { Request, Response } from 'express';

// Get all categories
export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to fetch categories'
    });
  }
};

// Get category by ID
export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to fetch category'
    });
  }
};

// Create new category
export const createCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, subcategories } = req.body;
    
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Failed to create category'
    });
  }
};

// Update category
export const updateCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Failed to update category'
    });
  }
};

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    
    // should check is there any ads in this subcategory, if yes it should be assigned to some other category

    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to delete category'
    });
  }
};