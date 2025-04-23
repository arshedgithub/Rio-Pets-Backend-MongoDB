import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected route - Get current user
// router.get('/me', authController.getCurrentUser);

export default router;