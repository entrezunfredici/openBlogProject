import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url ='http://localhost:8000/users'

  constructor(private http: HttpClient) { }
  getUserById(id: number): Observable<Users> {  // Correction du type de retour
    return this.http.get<Users>(`${this.url}/${id}`);  // Correction de l'URL
  }
  getPostByUsername(username: string): Observable<Users> {  // Correction du type de retour
    return this.http.get<Users>(`${this.url}/${username}`);  // Correction de l'URL
  }
  register(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.url}/register`, user);
  }
  login(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.url}/login`, user);
  }
  updateUser(id: number, user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.url}/${id}`, user);
  }
  increaceNbPosts(id: number, user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.url}/increaceNbComments/id=${id}`, user);
  }
  decreaseNbPosts(id: number, user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.url}/decreaceNbPosts/id=${id}`, user);
  }
}
