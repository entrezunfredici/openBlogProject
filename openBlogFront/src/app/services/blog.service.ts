import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts, PostsTemplate } from '../model/posts.model';
import { Subject } from '../model/subjects.model';
import { postsSubject } from '../model/postsSubjects.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private jsonUrl = 'apiurl.json';
  private postUrl = 'http://openblog.blog:8000/Posts';
  private subjectsUrl = 'http://openblog.blog:8000/subjects'
  //private postUrl = this.getUrl()+'/Posts';
  
  constructor(private http: HttpClient) { }
  
  getUrl(): Observable<string> {
    return this.http.get<JsonData>(this.jsonUrl).pipe(
      map(data => data.url)
    );
  }
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(
      `${this.postUrl}/all`
    ); 
  }
  getPostById(id: number): Observable<Posts> {  // Correction du type de retour
    return this.http.get<Posts>(`${this.postUrl}/id:${id}`);  // Correction de l'URL
  }
  getPostByAuthorId(authorId: number): Observable<Posts> {  // Correction du type de retour
    return this.http.get<Posts>(`${this.postUrl}/authorId:${authorId}`);  // Correction de l'URL
  }
  getPostByTitle(title: string): Observable<Posts> {  // Correction du type de retour
    return this.http.get<Posts>(`${this.postUrl}/title:${title}`);  // Correction de l'URL
  }
  getSubjects(id: number): Observable<postsSubject[]> {
    return this.http.get<postsSubject[]>(`${this.subjectsUrl}/post=${id}`)
  }
  createPost(title: string, content: string, authorId: number): Observable<PostsTemplate> {
    return this.http.post<Posts>(`${this.postUrl}/create`, {
      "title": title, 
      "content": content, 
      "authorId": authorId
    });
  }
  updatePost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${this.postUrl}/edit`, post);
  }
  incrementNbComments(id: number, post: Posts): Observable<Posts> {
    return this.http.put<Posts>(`${this.postUrl}/incrementNbComments/id=${id}`, post);
  }
  incrementNbLikes(id: number, post: Posts): Observable<Posts> {
    return this.http.put<Posts>(`${this.postUrl}/incrementNbLikes/id=${id}`, post);
  }
  incrementNbDislikes(id: number, post: Posts): Observable<Posts> {
    return this.http.put<Posts>(`${this.postUrl}/incrementNbDislikes/id=${id}`, post);
  }
  incrementNbReports(id: number, post: Posts): Observable<Posts> {
    return this.http.put<Posts>(`${this.postUrl}/incrementNbReports/id=${id}`, post);
  }
  deletePost(id: number): Observable<void> {  // Méthode de suppression
    return this.http.delete<void>(`${this.postUrl}/delete/${id}`);
  }
}

export interface JsonData {
  url: string;
}
