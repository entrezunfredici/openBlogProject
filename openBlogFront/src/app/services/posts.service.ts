import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url ='http://localhost:8000'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(
    `${this.url}/Posts/all`
    );
  }    
}
