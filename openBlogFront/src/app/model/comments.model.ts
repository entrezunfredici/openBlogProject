// subjects.model.ts
export interface Subjects {
    id: number;
    postId: number;
    userId: number;
    content: string;
    nbLikes: number;
    nbReports: number;
}
