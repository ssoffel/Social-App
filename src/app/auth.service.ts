import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
 


@Injectable()

export class AuthService {
path = 'http://localhost:3000/auth';
TOKEN_KEY = 'token';
currentUser: string;

constructor(private http: HttpClient, 
    private router: Router) {

  }

  getToken() {
      return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated() {
      const isAuth = !!localStorage.getItem(this.TOKEN_KEY);
      if (isAuth) {
          this.currentUser = localStorage.getItem('name');
      }
      return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('name');
    this.router.navigate(['/login']);
  }

registerUser(userData) {
    this.http.post<any>(this.path + '/register', userData ).subscribe(res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        localStorage.setItem('name', res.name)
        this.currentUser = res.name;
        if (res.token) {
            this.router.navigate(['/users']);
        }  
         
    });
 }
 
// loginUser(loginData) {
//     this.http.post<any>(this.path + '/login', loginData ).subscribe(res => {
//         console.log('api post loginUser response', res);
//         localStorage.setItem(this.TOKEN_KEY, res.token);
//         this.currentUser = res.name;
//         if (res.token) {
//             this.router.navigate(['/users']);
//         }
//  });
// }

loginUser(loginData) {
   return this.http.post<any>(this.path + '/login', loginData)
    .pipe(tap(res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        localStorage.setItem('name', res.name);
        this.currentUser = res.name;
    }))
    .pipe(catchError(err => {
        return of(true);
    }));
}

}