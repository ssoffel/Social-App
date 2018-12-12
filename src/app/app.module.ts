import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { MatButtonModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './authInterceptor.service';
import { HttpCachService } from './http-cach.service';
import { HttpCacheInterceptor } from './http-cache.interceptor';
 
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(appRoutes, {})
     
  ],
  providers: [ApiService, AuthService, HttpCachService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCacheInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
