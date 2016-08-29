import { provideRouter, Router, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { GenresComponent } from './genres';
import { LoginComponent } from './login';
import { CartComponent } from './cart';
import { CheckoutComponent } from './checkout';
import { OrdersComponent } from './orders';
import { GenreDetailComponent } from './genres/genre-detail';
import { AlbumComponent } from './album';

import { Authorize } from './services/security/authorize.service';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: 'genres/...', component: GenresComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent, canActivate: [Authorize] },
    { path: 'checkout', component: CheckoutComponent, canActivate: [Authorize] },
    { path: 'orders', component: OrdersComponent, canActivate: [Authorize] },
    { path: 'genres', component: GenresComponent },
    { path: 'genres/:name', component: GenreDetailComponent }
    //{ path: '**', component: NoContent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];