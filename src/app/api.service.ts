import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 

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
            
         });
    }

    


/*
how to set headers 
    getMessages(authorId) {
        
        this.http.get<any>(this.path + 'posts/' + authorId, {
            headers: new HttpHeaders({
                'Accept': 'application/json,
                'Authorization': 'my-token'
            })
        }).subscribe(res => {
           this.messages = res;
        });
   }
*/
    postMessage(message) {
        this.http.post(this.path + 'post', message).subscribe(res => {
        });
    }
    getUsers() {
        this.http.get<any>(this.path + 'users').subscribe(res => {
            this.users = res;
            
        });
    }
    getProfile(id) {
        return this.http.get(this.path + 'profile/' + id);
    }

}

/*
    updateMessage(updatedMessage: Massege): Observable<void> {
        return this.http.put<void>(`/api/messages/$)
    }

*/