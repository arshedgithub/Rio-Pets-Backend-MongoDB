import express from 'express';
import { authenticate, loginValidation, registerValidation } from '../middlewares';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);

// Protected route - Get current user
router.get('/me', authenticate, authController.getCurrentUser);

export default router;