import { CategoryTypes } from "../enums";

export interface ICategory {
    _id?: string;
    name: string;
    type: CategoryTypes;
}