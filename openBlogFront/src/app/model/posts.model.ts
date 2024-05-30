import { Users } from './users.model'
// posts.model.ts
export interface Posts {
    id: number;
    authorId: number;
    title: string;
    content: string;
    nbComments: number;
    nbLikes: number;
    nbDislikes: number;
    nbReports: number;
    nbViews: number;
    user: Users;
}
