import {bind, provide} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app/app.component';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {AlbumService} from './services/album/album.service';
import {GenreService} from './services/genre/genre.service';
import {CartService} from './services/cart/cart.service';
import {OrderService} from './services/order/order.service';
import {LoadingService} from './services/loading/loading.service';
import {CheckoutService} from './services/checkout/checkout.service';
import {Headers, BaseRequestOptions, RequestOptions} from '@angular/http';
import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { APP_ROUTER_PROVIDERS } from './route.config';

bootstrap(AppComponent,
    [APP_ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        GenreService,
        AlbumService,
        CartService,
        OrderService,
        CheckoutService,
        LoadingService,
        provide(AuthHttp, {
            useFactory: (http) => {
                return new AuthHttp(new AuthConfig(), http);
            },
            deps: [Http]
        })
    ]);
