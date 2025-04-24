export interface RegisterUserInput {
    name: string;
    username: string;
    password: string;
    role: 'seller' | 'buyer' | 'admin';
    phone: string;
    location?: string;
}

export interface LoginUserInput {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        username: string;
        role: string;
    };
}