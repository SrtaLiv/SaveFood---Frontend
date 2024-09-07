import { Routes } from '@angular/router';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

//Rutas
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Inicio'
    },

    {
        path: 'food-form/:id',
        component: FoodFormComponent,
        title: 'Formulario de Comidas'
    },
    {
        path: 'search',
        component: SearchComponent,
        title: 'Search'
    },
    {
        path: '*',
        redirectTo: '',
        pathMatch: 'full'
    }
];
