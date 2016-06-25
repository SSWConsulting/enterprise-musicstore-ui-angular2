System.register(['@angular/core', '@angular/platform-browser-dynamic', './components/app/app.component', '@angular/http', './services/album/album.service', './services/genre/genre.service', './services/cart/cart.service', './services/order/order.service', './services/checkout/checkout.service', 'angular2-jwt', './route.config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, app_component_1, http_1, album_service_1, genre_service_1, cart_service_1, order_service_1, checkout_service_1, angular2_jwt_1, route_config_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (album_service_1_1) {
                album_service_1 = album_service_1_1;
            },
            function (genre_service_1_1) {
                genre_service_1 = genre_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            },
            function (checkout_service_1_1) {
                checkout_service_1 = checkout_service_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [route_config_1.APP_ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                genre_service_1.GenreService,
                album_service_1.AlbumService,
                cart_service_1.CartService,
                order_service_1.OrderService,
                checkout_service_1.CheckoutService,
                core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: function (http) {
                        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig(), http);
                    },
                    deps: [http_1.Http]
                })
            ]);
        }
    }
});
