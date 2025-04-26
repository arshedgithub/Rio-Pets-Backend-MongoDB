import express from 'express';
const router = express.Router();
import * as adController from '../controllers/ad.controller'
import { authenticate, authorizeRoles } from '../middlewares';

router.get('/', adController.getAds);
router.get('/:id', adController.getAdById);
router.post('/', authenticate, adController.createAd);
router.delete(
    '/:id',
    authenticate,
    authorizeRoles('seller', 'admin'),
    adController.deleteAd
);

export default router;