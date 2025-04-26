export interface IBlog {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    images: string[];
    tags: string[];
    readTime: number;
    createdAt?: Date;
    updatedAt?: Date;
}