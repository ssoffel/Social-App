import { Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';
 
 

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    <button mat-button routerLink='/'><span>My Social</span></button>
    <button mat-button style='margin: 50px;'  routerLink='/users'>Users</button>
    <span style='flex: 1 1 auto'></span>
      
        <button mat-button *ngIf='!auth.isAuthenticated()'  routerLink='/register'>Register</button>
        <button mat-button *ngIf='!auth.isAuthenticated()'  routerLink='/login'>Login</button>
        
       <div *ngIf='auth.isAuthenticated()'>Welcome {{auth.currentUser}}
        <button mat-button (click)='auth.logOut()'>Logout</button>
       </div>
    
  </mat-toolbar>
  <router-outlet></router-outlet>
  `
 
})
export class AppComponent implements OnInit {
  
   
   
   

  constructor(private auth: AuthService) {


  }
  ngOnInit() {
    console.log('isAuthenticated', this.auth.isAuthenticated())
  }

   
}
