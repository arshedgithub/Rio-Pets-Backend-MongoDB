import Ad, { AdDocument } from '../models/Ad';

// export const createAd = async (): Promise<AdDocument> => {

//     const ad = new Ad({
//         ...adData,
//         images: imageUrls,
//     });

//     await ad.save();

//     // Decrease coin balance by 1
//     coinBalance.coins -= 1;
//     coinBalance.lastUpdated = new Date();
//     await coinBalance.save();

//     return ad;
// };

export const getAds = async (query: any = {}): Promise<AdDocument[]> => {
    return Ad.find(query)
    //     .populate('categoryId', 'name')
    //     .populate('sellerId', 'name email phone location')
    //     .sort({ createdAt: -1 });
};

export const getAdById = async (id: string): Promise<AdDocument | null> => {
    return Ad.findById(id)
};