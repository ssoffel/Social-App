import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
    
})

export class RegisterComponent {
    registerData = {};
    constructor(private auth: AuthService) {

    }

    registerUser() {
        console.log('This is the form values', this.registerData);
        const userData = Object.assign({}, this.registerData);
        this.auth.registerUser(userData);
    }
}