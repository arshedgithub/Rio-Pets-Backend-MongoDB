import express from 'express';
import * as authController from '../controllers/auth.controller';
import { loginValidation, registerValidation } from '../middlewares/validation';

const router = express.Router();

router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);

// Protected route - Get current user
// router.get('/me', authController.getCurrentUser);

export default router;