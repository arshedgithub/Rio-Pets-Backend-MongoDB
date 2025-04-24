import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

import connectDB from './config/database';

import adRoutes from './routes/ad.routes';
import { errorHandler } from './middlewares/error';

const app: Application = express();

connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/ads', adRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/ads', adRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;