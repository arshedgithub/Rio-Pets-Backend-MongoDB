export interface IAd {
    _id?: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    location: string;
    available: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}