import {Component} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    loginData = {};

    constructor(private auth: AuthService) {

    }

    loginUser() {

        this.auth.loginUser(this.loginData);
        console.log('in loging user after auth')
    }


}