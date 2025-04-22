import { Request, Response } from 'express';
import * as adService from '../services/ad.service';

export const createAd = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const ad = await adService.createAd(
      {
        title: req.body.title,
        description: req.body.description,
        price: parseFloat(req.body.price),
        location: req.body.location,
        images: req.body.images,
        available: true,
      },
    );
    
    res.status(201).json(ad);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Failed to create ad'
    });
  }
};

export const getAds = async (req: Request, res: Response): Promise<void> => {
  try {
    const filters = { ...req.query };
    
    delete filters.page;
    delete filters.limit;
    delete filters.sort;
    
    const ads = await adService.getAds(filters);
    res.status(200).json(ads);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to fetch ads'
    });
  }
};

export const getAdById = async (req: Request, res: Response): Promise<void> => {
  try {
    const ad = await adService.getAdById(req.params.id);
    
    if (!ad) {
      res.status(404).json({ message: 'Ad not found' });
      return;
    }
    
    res.status(200).json(ad);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to fetch ad'
    });
  }
};