import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts } from '../model/posts.model';
import { Subjects } from '../model/subjects.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private jsonUrl = 'apiurl.json';
  private postUrl = 'http://localhost:8000/Posts';
  //private postUrl = this.getUrl()+'/Posts';
  
  constructor(private http: HttpClient) { }
  
  getUrl(): Observable<string> {
    return this.http.get<JsonData>(this.jsonUrl).pipe(
      map(data => data.url)
    );
  }
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.postUrl}/all`); 
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
  createPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${this.postUrl}/create`, post);
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
