import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts, PostsTemplate, Reactions } from '../model/posts.model';
import { Subject } from '../model/subjects.model';
import { postsSubject } from '../model/postsSubjects.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private jsonUrl = 'apiurl.json';
  private postUrl = 'http://localhost:8000/Posts';
  private subjectsUrl = 'http://localhost:8000/subjects'
  
  constructor(private http: HttpClient) { }
  
  getUrl(): Observable<string> {
    return this.http.get<JsonData>(this.jsonUrl).pipe(
      map(data => data.url)
    );
  }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.postUrl}/all`);
  }

  getPostById(id: number): Observable<Posts> {
    return this.http.get<Posts>(`${this.postUrl}/id=${id}`);
  }

  getPostByAuthorId(authorId: number): Observable<Posts> {
    return this.http.get<Posts>(`${this.postUrl}/authorId=${authorId}`);
  }

  getPostByTitle(title: string): Observable<Posts> {
    return this.http.get<Posts>(`${this.postUrl}/title=${title}`);
  }

  getSubjects(id: number): Observable<postsSubject[]> {
    return this.http.get<postsSubject[]>(`${this.subjectsUrl}/post=${id}`);
  }

  getReactions(postId: number, userId: number, type: string): Observable<Reactions> {
    return this.http.get<Reactions>(`${this.postUrl}/getReaction/post=${postId}&user=${userId}&type=${type}`);
  }

  createPost(title: string, content: string, authorId: number): Observable<string> {
    return this.http.post<string>(`${this.postUrl}/create`, {
      "title": title,
      "content": content,
      "authorId": authorId
    });
  }

  addReaction(postId: number, userId: number, type: string): Observable<string> {
    return this.http.post<string>(`${this.postUrl}/addReaction`, {
      "postId": postId,
      "userId": userId,
      "type": type
    });
  }

  updatePost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${this.postUrl}/edit`, post);
  }

  incrementNbComments(id: number): Observable<Posts> {
    return this.http.put<Posts>(`${this.postUrl}/incrementNbComments/id=${id}`, {});
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.postUrl}/delete/${id}`);
  }

  deleteReaction(postId: number, userId: number, type: string): Observable<string> {
    console.log('Deleting reaction with:', { postId, userId, type });
    return this.http.delete<string>(`${this.postUrl}/deleteReaction/post=${postId}&user=${userId}&type=${type}`);
  }
}

export interface JsonData {
  url: string;
}
