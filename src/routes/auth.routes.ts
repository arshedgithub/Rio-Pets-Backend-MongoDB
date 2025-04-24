import express from 'express';
import * as authController from '../controllers/auth.controller';
import { loginValidation, registerValidation } from '../middlewares';
import { authenticate } from '../middlewares';

const router = express.Router();

router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);

// Protected route - Get current user
router.get('/me', authenticate, authController.getCurrentUser);

export default router;