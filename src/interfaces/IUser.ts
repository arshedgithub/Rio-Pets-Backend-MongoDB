export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: 'seller' | 'buyer';
    phone?: string;
    location?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }