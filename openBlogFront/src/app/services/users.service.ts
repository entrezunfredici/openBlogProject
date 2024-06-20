import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users, loginResponse, updaterBody, usersResponse, updateResponse, UsersWithoutPassword} from '../model/users.model';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private tokenKey = 'authToken';
  url ='http://openblog.blog:8000/users'
  thisLoginResponse: loginResponse;

  constructor(private http: HttpClient) { }
  getUserById(id: number): Observable<UsersWithoutPassword> {
    return this.http.get<UsersWithoutPassword>(`${this.url}/id/${id}`);
  }
  getPostByUsername(username: string): Observable<Users> { 
    return this.http.get<Users>(`${this.url}/username/${username}`);
  }
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      if (localStorage.getItem('token')) {
        return true;
      }
      return !!localStorage.getItem(this.tokenKey);
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
    return this.http.post<loginResponse>(`${this.url}/login`,{
      "username": username,
      "password": password
    });
  }
  updateUser(id: number, update: updaterBody): Observable<string> {
    return this.http.post<string>(`${this.url}/${id}`, update);
  }
  increaseNbPosts(id: number): Observable<Users> {
    return this.http.put<Users>(`${this.url}/increaseNbPosts/id=${id}`,{});
  }
  decreaseNbPosts(id: number): Observable<Users> {
    return this.http.put<Users>(`${this.url}/decreaceNbPosts/id=${id}`,{});
  }
  getUserInfo(): any {
    const token = localStorage.getItem('token');
    if (token) {
      return jwt_decode.jwtDecode(token);
    }
    return null;
  }
  clearToken(): void {
    localStorage.removeItem('token');
  }
}
