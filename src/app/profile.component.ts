import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    template: `
    <mat-card>	
    <mat-card-header>
      <mat-card-title><h4>Profile</h4></mat-card-title>
    </mat-card-header>
    <mat-card-content>
       <mat-list>
         <mat-list-item>Email: {{user?.name}}</mat-list-item>
         <mat-list-item>Name: {{user?.email}}</mat-list-item>
         <mat-list-item>Description: {{user?.description}}</mat-list-item>
      </mat-list>
    </mat-card-content>
  </mat-card>
  <mat-card>	
  <mat-card-header>
    <mat-card-title><h4>Posts</h4></mat-card-title>
  </mat-card-header>
  <mat-card-content>
     <mat-list>
     <app-messages></app-messages>
    </mat-list>
  </mat-card-content>
</mat-card>
   
    `
})
export class ProfileComponent implements OnInit {
    user: any;
    constructor(private api: ApiService,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
      this.api.getProfile(this.route.snapshot.params.id).subscribe(res => {
        this.user = res;
        console.log('this.user:', this.user);
      });
    }
}