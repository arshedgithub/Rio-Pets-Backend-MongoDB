import CoinBalance, { CoinBalanceDocument } from '../models/CoinBalance';

export const getBalance = async (sellerId: string): Promise<CoinBalanceDocument | null> => {
  return CoinBalance.findOne({ sellerId });
};

export const initializeBalance = async (sellerId: string, initialCoins: number = 30): Promise<CoinBalanceDocument> => {
  const existingBalance = await CoinBalance.findOne({ sellerId });
  
  if (existingBalance) {
    return existingBalance;
  }
  
  const coinBalance = new CoinBalance({
    sellerId,
    coins: initialCoins,
    lastUpdated: new Date()
  });
  
  return coinBalance.save();
};

export const addCoins = async (sellerId: string, amount: number): Promise<CoinBalanceDocument> => {
  const balance = await CoinBalance.findOne({ sellerId });
  
  if (!balance) {
    return initializeBalance(sellerId, amount);
  }
  
  balance.coins += amount;
  balance.lastUpdated = new Date();
  
  return balance.save();
};