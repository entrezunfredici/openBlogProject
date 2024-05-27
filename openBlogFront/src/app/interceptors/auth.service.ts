import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpInterceptorFn, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/'])
        }
        throw err;
      })
    );
  }
}
