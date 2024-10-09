import { Routes } from '@angular/router';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';

//Rutas
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },

    {
        path: 'food-form/:id',
        component: FoodFormComponent,
        title: 'Formulario de Comidas'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: '*',
        redirectTo: '',
        pathMatch: 'full'
    }
];
