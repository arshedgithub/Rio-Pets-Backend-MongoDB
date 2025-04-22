import { IAd } from '../interfaces';
import Ad, { AdDocument } from '../models/Ad';

export const createAd = async (adData: IAd): Promise<AdDocument> => {
    const ad = new Ad(adData);

    await ad.save();
    return ad;

};

export const getAds = async (query: any = {}): Promise<AdDocument[]> => {
    return Ad.find(query)
    //     .populate('categoryId', 'name')
    //     .populate('sellerId', 'name email phone location')
    //     .sort({ createdAt: -1 });
};

export const getAdById = async (id: string): Promise<AdDocument | null> => {
    return Ad.findById(id)
};