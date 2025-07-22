import { Routes } from '@angular/router';

// Views/Components
import { LoginRegisterComponent } from './view/login-register/login-register.component';
import { UserProfileComponent } from './view/user-profile/user-profile.component';

export const routes: Routes = [
    {path: '', component: LoginRegisterComponent},
    {path: 'account/user/:id', component: UserProfileComponent}
];
