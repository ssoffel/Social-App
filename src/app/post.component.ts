import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-posts',
    template: `
    <mat-card>	
  <mat-card-header>
    <mat-card-title><h4>New Post</h4></mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <form>
     
     <mat-form-field class="example-full-width" style='width: 100%'>
      <textarea matInput placeholder="Post Message..." required  type='text'  
       [(ngModel)]='postMessage' name='postMessage'></textarea>
     </mat-form-field>
     <br>
     <button mat-raised-button color='primary'  (click)='handlePostMessage()'>Post</button>
  </form>
  </mat-card-content>
</mat-card>
    `
})
export class PostComponent implements OnInit {
    postMessage = '';
    constructor(private api: ApiService) {

    }
    ngOnInit() {
          
         
      }
    handlePostMessage() {
        console.log("in handle message", this.postMessage)
        this.api.postMessage({ message: this.postMessage } );
    }


}