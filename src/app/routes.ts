import { Routes } from '@angular/router';

 
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent} from './profile.component';
import { PostComponent } from './post.component';


export const appRoutes: Routes = [
    { path: '', component: PostComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'profile/:id', component: ProfileComponent }
     

]