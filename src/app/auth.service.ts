import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


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
      return !!localStorage.getItem(this.TOKEN_KEY);
      //returns true if it exists;
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

registerUser(userData) {
    this.http.post<any>(this.path + '/register', userData ).subscribe(res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        this.currentUser = res.name;
        if (res.token) {
            this.router.navigate(['/users']);
        }
         
    });
 }
 
loginUser(loginData) {
    this.http.post<any>(this.path + '/login', loginData ).subscribe(res => {
        console.log('api post loginUser response', res);
        localStorage.setItem(this.TOKEN_KEY, res.token);
        this.currentUser = res.name;
        if (res.token) {
            this.router.navigate(['/users']);
        }
 });
}

}