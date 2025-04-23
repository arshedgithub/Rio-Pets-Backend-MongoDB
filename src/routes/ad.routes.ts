import express from 'express';
const router = express.Router();
import * as adController from '../controllers/ad.controller'
import { authenticate } from '../middlewares/auth';

router.get('/', adController.getAds);
router.get('/:id', adController.getAdById);
router.post('/', authenticate, adController.createAd);

export default router;