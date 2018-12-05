import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-messages',
    template: `
    <div *ngFor='let message of api.messages'>
       <mat-card>{{message.message}}</mat-card>
    </div>
    `
})
export class MessagesComponent implements OnInit {

    constructor(private api: ApiService,
        private route: ActivatedRoute) {

    }
    ngOnInit() {
        const userId = this.route.snapshot.params.id;
        this.api.getMessages(userId);
        console.log(this.api.messages);
         
      }


}