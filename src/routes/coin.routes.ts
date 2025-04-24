import express from 'express';
import * as coinController from '../controllers/coin.controller';
import { authenticate, authorizeRoles } from '../middlewares';

const router = express.Router();

// All routes are protected
router.use(authenticate);

router.get('/balance', coinController.getBalance);

router.post(
  '/add',
  authorizeRoles('admin'),
  coinController.addCoins
);

// router.post(
//   '/purchase',
//   authorizeRoles('seller'),
//   coinController.purchaseCoins
// );

export default router;