import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class AuthService {
path = 'http://localhost:3000/auth';
constructor(private http: HttpClient) {

  }

registerUser(userData) {
    this.http.post(this.path + '/register', userData ).subscribe(res => {
    console.log('api post registerUser response', res);
         
    });
 }
 
loginUser(loginData) {
    this.http.post<any>(this.path + '/login', loginData ).subscribe(res => {
        console.log('api post loginUser response', res);
        localStorage.setItem('token', res.token);
 });
}

}