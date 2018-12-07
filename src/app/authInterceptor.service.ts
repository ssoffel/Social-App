import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'; 
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private auth: AuthService) {

    }

    intercept(req, next) {
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + this.auth.getToken() )
        })
        return next.handle(authRequest);
    }

}