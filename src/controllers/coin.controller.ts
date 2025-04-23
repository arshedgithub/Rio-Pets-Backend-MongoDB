import { Request, Response } from 'express';
import * as coinService from '../services/coin.service';

export const getBalance = async (req: Request, res: Response): Promise<void> => {
  try {
    const balance = await coinService.getBalance(req.user._id);
    
    if (!balance) {
      res.status(404).json({ message: 'Coin balance not found' });
      return;
    }
    
    res.status(200).json(balance);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to fetch coin balance'
    });
  }
};

export const addCoins = async (req: Request, res: Response): Promise<void> => {
  try {
    const { amount, sellerId } = req.body;
    
    if (!amount || amount <= 0) {
      res.status(400).json({ message: 'Invalid amount' });
      return;
    }
    
    const balance = await coinService.addCoins(sellerId, amount);
    res.status(200).json(balance);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to add coins'
    });
  }
};

// payment processing
// export const purchaseCoins = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { amount, paymentDetails } = req.body;
    
//     if (!amount || amount <= 0) {
//       res.status(400).json({ message: 'Invalid amount' });
//       return;
//     }
    
//     // integrate with a payment gateway
    
//     const balance = await coinService.addCoins(req.user._id, amount);
//     res.status(200).json({
//       message: 'Coins purchased successfully',
//       balance
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error instanceof Error ? error.message : 'Failed to purchase coins'
//     });
//   }
// };