import { Request, Response } from 'express';
import * as adService from '../services/ad.service';

export const createAd = async (req: Request, res: Response): Promise<void> => {
  try {

    const { title, description, price, images, delivery, location, type, featured, available } = req.body;

    const ad = await adService.createAd(
      {
        title: title,
        description: description,
        price: parseFloat(price),
        images: images,
        delivery: delivery,
        location: location,
        petType: type,
        seller: req.user._id,
        featured: featured,
        available: available,
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

export const deleteAd = async (req: Request, res: Response): Promise<void> => {
  try {
    const ad = await adService.deleteAd(req.params.id, req.user._id);
    
    if (!ad) {
      res.status(404).json({ message: 'Ad not found or you are not authorized to delete it' });
      return;
    }
    
    res.status(200).json({ message: 'Ad deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to delete ad'
    });
  }
};