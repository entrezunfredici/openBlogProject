import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users, loginResponse } from '../model/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url ='http://localhost:8000/users'

  constructor(private http: HttpClient) { }
  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.url}/id/${id}`);
  }
  getPostByUsername(username: string): Observable<Users> { 
    return this.http.get<Users>(`${this.url}/username/${username}`);
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  register(username: string, email: string, password: string): Observable<Users> {
    return this.http.post<Users>(`${this.url}/register`, {
      "username": username,
      "password": password,
      "email": email
    });
  }
  login(username: string, password: string): Observable<loginResponse> {
    console.log(username, password);
    return this.http.post<loginResponse>(`${this.url}/login`,{
      "username": username,
      "password": password
    });
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
