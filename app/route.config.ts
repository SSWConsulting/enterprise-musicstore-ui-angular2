import {GenresComponent} from './components/genre/genres.component';
import {AlbumDetailComponent} from './components/album/album.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {OrderComponent} from './components/order/order.component';

export var Routes = {
    dashboard: {
        path: '/',
        as: 'Dashboard',
        component: DashboardComponent
    },
    genres: {
        path: '/genres/...',
        as: 'Genres',
        component: GenresComponent
    },
    album: {
        path: '/album/:id',
        as: 'Album',
        component: AlbumDetailComponent
    },
    login: {
        path: '/login',
        as: 'Login',
        component: LoginComponent
    },
    cart: {
        path: '/cart',
        as: 'Cart',
        component: CartComponent
    },
    checkout: {
        path: '/checkout',
        as: 'Checkout',
        component: CheckoutComponent
    },
    orders: {
        path: '/orders',
        as: 'Orders',
        component: OrderComponent
    }
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);

