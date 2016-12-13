import { GenresComponent } from './components/genre/genres.component';
import { Routes } from '@angular/router';
import { AlbumDetailComponent } from './components/album/album.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderComponent } from './components/order/order.component';
import { GenreDetailComponent } from './components/genre/genre-detail.component';

export const ROUTES: Routes = [
    {
        path: '',
        data: { title: 'dashboard' },
        component: DashboardComponent
    },
    {
        path: 'genres/...',
        data: { title: 'genres' },
        component: GenresComponent,
    },
    {
        path: 'genres/genre/:name',
        data: { title: 'genres' },
        component: GenreDetailComponent,
    },
    {
        path: 'album/:id',
        data: { title: 'album' },
        component: AlbumDetailComponent
    },
    {
        path: 'login',
        data: { title: 'login' },
        component: LoginComponent
    },
    {
        path: 'cart',
        data: { title: 'cart' },
        component: CartComponent
    },
    {
        path: 'checkout',
        data: { title: 'checkout' },
        component: CheckoutComponent
    },
    {
        path: 'orders',
        data: { title: 'orders' },
        component: OrderComponent
    }
];

