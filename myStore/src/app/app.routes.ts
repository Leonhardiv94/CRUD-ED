import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        title: 'Inicio de sesion'
    },
    {
        path: 'start',
        component: StartComponent,
        title: 'Inicio'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Registro'
    }
];
