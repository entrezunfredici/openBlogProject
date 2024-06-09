import { Posts } from './posts.model'
import { Subject } from './subjects.model'

export interface postsSubject {
    id: number;
    postId: number;
    subjectId: number;
    post: Posts;
    subject: Subject;
}