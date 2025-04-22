import Ad, { AdDocument } from '../models/Ad';

export const createAd = async (
    adData: {
        title: string;
        description: string;
        categoryId: string;
        sellerId: string;
        price: number;
        location: string;
    },
    filePaths: string[]
): Promise<AdDocument> => {

    const imageUrls = ["abc", "cde"]

    // Create the ad
    const ad = new Ad({
        ...adData,
        images: imageUrls,
    });

    await ad.save();
    return ad;
};

export const getAds = async (query: any = {}): Promise<AdDocument[]> => {
    return Ad.find(query)
        .populate('categoryId', 'name')
        .populate('sellerId', 'name email phone location')
        .sort({ createdAt: -1 });
};

export const getAdById = async (id: string): Promise<AdDocument | null> => {
    return Ad.findById(id)
        .populate('categoryId', 'name')
        .populate('sellerId', 'name email phone location');
};