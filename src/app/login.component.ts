import {Component} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    loginData = {};
    isError = false;
    constructor(private auth: AuthService,
                private router: Router) {

    }

    loginUser() {

        this.auth.loginUser(this.loginData).subscribe(resp => {
            if (!resp === true) {
                console.log('this is resp', resp);
                this.isError = resp;
            } else {
                this.router.navigate(['/users']);
            }
        });
        
    }


}