export interface UserDTO {
    id: string;
    name: string;
    username: string;
    phone?: string;
    role: 'seller' | 'buyer';
}
