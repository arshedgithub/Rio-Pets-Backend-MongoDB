import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

import connectDB from './config/database';

import adRoutes from './routes/ad.routes';
import authRoutes from './routes/auth.routes';
import coinRoutes from './routes/coin.routes';
import categoryRoutes from './routes/category.routes';

import { errorHandler } from './middlewares/error';

const app: Application = express();

connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/ads', adRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/coins', coinRoutes);
app.use('/api/categories', categoryRoutes);

app.use(errorHandler);

if (process.env.NODE_ENV == "development") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;