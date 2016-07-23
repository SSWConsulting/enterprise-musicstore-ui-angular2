import {bind, provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
import {AppComponent} from './components/app/app.component';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AlbumService} from './services/album/album.service';
import {GenreService} from './services/genre/genre.service';
import {CartService} from './services/cart/cart.service';
import {OrderService} from './services/order/order.service';
import {LoadingService} from './services/loading/loading.service';
import {CheckoutService} from './services/checkout/checkout.service';
import {Headers, BaseRequestOptions, RequestOptions} from 'angular2/http';
import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular2-jwt';

bootstrap(AppComponent,
    [ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        GenreService,
        AlbumService,
        CartService,
        OrderService,
        CheckoutService,
        LoadingService,
        ROUTER_BINDINGS,
        bind(ROUTER_PRIMARY_COMPONENT).toValue(AppComponent),
        provide(AuthHttp, {
            useFactory: (http) => {
                return new AuthHttp(new AuthConfig(), http);
            },
            deps: [Http]
        }),
        provide(APP_BASE_HREF, { useValue: '/' })
    ]);
