import { CATEGORY_TYPES, LOCATIONS } from "../enums";

export interface IAd {
    _id?: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    location: LOCATIONS;
    delivery: boolean;
    petType: CATEGORY_TYPES;
    seller: string,
    featured: boolean;
    available: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}