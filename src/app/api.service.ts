import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    messages = [];
    users = [];
    path = 'http://localhost:3000/';

    constructor(private http: HttpClient ) {

    }

    getMessages(authorId) {
        this.http.get<any>(this.path + 'posts/' + authorId).subscribe(res => {
            this.messages = res;
            console.log('service messages', this.messages);
        });
    }

    postMessage(message) {
        this.http.post(this.path + 'post', message).subscribe(res => {
        });
    }
    getUsers() {
        this.http.get<any>(this.path + 'users').subscribe(res => {
            this.users = res;
            console.log('service users', this.users);
        });
    }
    getProfile(id) {
        return this.http.get(this.path + 'profile/' + id);
    }

}