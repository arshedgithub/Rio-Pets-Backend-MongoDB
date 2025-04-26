export interface ICoinBalance {
  _id?: string;
  sellerId: string;
  coins: number;
  lastUpdated: Date;
  createdAt?: Date;
  updatedAt?: Date;
}