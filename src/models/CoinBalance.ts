import mongoose, { Schema, Document } from 'mongoose';
import { ICoinBalance } from '../types/interfaces';

export interface CoinBalanceDocument extends Omit<ICoinBalance, '_id'>, Document {}

const coinBalanceSchema: Schema = new Schema(
  {
    sellerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    coins: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<CoinBalanceDocument>('CoinBalance', coinBalanceSchema);