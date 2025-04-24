import { Request, Response, NextFunction, RequestHandler } from 'express';
import { check, validationResult } from 'express-validator';

export const validateRequest: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    next();
};

export const registerValidation = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid username').not().isEmpty(),
    check('password', 'Password must be at least 8 characters').isLength({ min: 8 }),
    check('role', 'Role must be either seller or buyer').isIn(['seller', 'buyer']),
    validateRequest
];

export const loginValidation = [
    check('email', 'Please include a valid username').exists(),
    check('password', 'Password is required').exists(),
    validateRequest
];