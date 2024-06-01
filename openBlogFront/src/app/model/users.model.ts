// users.model.ts
export interface Users {
    id: number;
    username: string;
    userPhoto: string;
    email: string;
    password: string;
    nbPosts: number;
    followers: number;
    description: string;
    role: string;
}

export interface loginResponse {
    success: boolean;
    token: string;
}
