export interface IUser {
    _id?: string;
    name: string;
    username: string;
    password: string;
    role: 'admin' | 'seller' | 'buyer';
    phone: string;
    location: string;
    createdAt?: Date;
    updatedAt?: Date;
  }