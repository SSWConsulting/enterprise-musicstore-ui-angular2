import {GenresComponent} from './components/genre/genres.component';
import { provideRouter, RouterConfig } from '@angular/router';
import {AlbumDetailComponent} from './components/album/album.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {OrderComponent} from './components/order/order.component';
import {GenreDetailComponent} from './components/genre/genre-detail.component';

export var Routes = {
    dashboard: {
        path: '',
        as: 'dashboard',
        component: DashboardComponent
    },
    genres: {
        path: 'genres/...',
        as: 'genres',
        component: GenresComponent,
    },
    genre: {
        path: 'genres/genre/:name',
        as: 'genres',
        component: GenreDetailComponent,
    },
    album: {
        path: 'album/:id',
        as: 'album',
        component: AlbumDetailComponent
    },
    login: {
        path: 'login',
        as: 'login',
        component: LoginComponent
    },
    cart: {
        path: 'cart',
        as: 'cart',
        component: CartComponent
    },
    checkout: {
        path: 'checkout',
        as: 'checkout',
        component: CheckoutComponent
    },
    orders: {
        path: 'orders',
        as: 'orders',
        component: OrderComponent
    }
};

var routes = Object.keys(Routes).map(r => Routes[r]);

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

