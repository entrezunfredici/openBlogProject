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

export interface UsersWithoutPassword {
    id: number;
    username: string;
    userPhoto: string;
    email: string;
    nbPosts: number;
    followers: number;
    description: string;
    role: string;
}

export interface usersResponse{
    success: boolean;
    user: Users;
}

export interface loginResponse {
    success: boolean;
    token: string;
}

export interface updaterBody{
    username: string;
    userPhoto: string;
    email: string;
    description: string;
}
