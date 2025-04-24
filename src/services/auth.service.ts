import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { UserDocument } from '../models/User';
import { RegisterUserInput, LoginUserInput, AuthResponse } from '../types/interfaces/IAuth';
import * as coinService from './coin.service';

export const registerUser = async (userData: RegisterUserInput): Promise<AuthResponse> => {
  const { name, username, password, role, phone, location } = userData;
  
  // Check if user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('User already exists with this username');
  }
  
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  // Create new user
  const user = new User({
    name,
    username,
    password: hashedPassword,
    role,
    phone,
    location
  });
  
  await user.save();
  
  // If user is a seller, initialize coin balance with 30
  if (role === 'seller') {
    await coinService.initializeBalance(user._id as string, 30);
  }
  
  // Generate JWT token
  const token = generateToken(user);
  
  return {
    token,
    user: {
      id: user._id as string,
      name: user.name,
      username: user.username,
      role: user.role
    }
  };
};

export const loginUser = async (credentials: LoginUserInput): Promise<AuthResponse> => {
  const { username, password } = credentials;
  
  // Find user by username
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }
  
  // Generate JWT token
  const token = generateToken(user);
  
  return {
    token,
    user: {
      id: user._id as string,
      name: user.name,
      username: user.username,
      role: user.role
    }
  };
};

// Generate JWT token
const generateToken = (user: UserDocument): string => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      username: user.username,
      role: user.role
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '30d' }
  );
};