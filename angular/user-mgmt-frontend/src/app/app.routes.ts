import { Routes } from '@angular/router';


// Views/Components
import { LoginRegisterComponent } from './view/login-register/login-register.component';
import { UserProfileComponent } from './view/user-profile/user-profile.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login',  component: LoginRegisterComponent },
    {path: 'account', component: UserProfileComponent, canActivate: [authGuard]}
];
