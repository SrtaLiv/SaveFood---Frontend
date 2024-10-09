import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Installation',
                        route: '/installation'
                    },
                    {
                        label: 'Configuration',
                        route: '/configuration'
                    }
                ]
            },
            {
                label: 'Comidas',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Angular',
                        url: 'https://angular.io/'
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }
}