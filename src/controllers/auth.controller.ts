import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const authData = await authService.registerUser(req.body);
    res.status(201).json(authData);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Registration failed'
    });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const authData = await authService.loginUser(req.body);
    res.status(200).json(authData);
  } catch (error) {
    res.status(401).json({
      message: error instanceof Error ? error.message : 'Authentication failed'
    });
  }
};