import { CATEGORY_TYPES } from "../enums";

export interface ICategory {
    _id?: string;
    name: string;
    type: CATEGORY_TYPES;
}