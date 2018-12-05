import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-users',
    template: `
    <div *ngFor='let user of api.users'>
       <mat-card [routerLink]="['/profile', user._id]" style='cursor: pointer'>{{user.name}}</mat-card>
    </div>
    `
})
export class UsersComponent implements OnInit {

    constructor(private api: ApiService) {

    }
    ngOnInit() {
        this.api.getUsers();
    }


}