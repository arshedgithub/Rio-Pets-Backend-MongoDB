import express from 'express';
import * as categoryController from '../controllers/category.controller';
import { authenticate, authorizeRoles } from '../middlewares';

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);

// Admin-only routes
router.post('/', authenticate, authorizeRoles('admin'), categoryController.createCategory);
router.put('/:id', authenticate, authorizeRoles('admin'), categoryController.updateCategory);
router.delete('/:id', authenticate, authorizeRoles('admin'), categoryController.deleteCategory);

export default router;