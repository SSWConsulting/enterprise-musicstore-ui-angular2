System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './components/app/app', 'angular2/http', './services/album/album.service', './services/genre/genre.service', './services/cart/cart.service', './services/order/order.service', './services/checkout/checkout.service'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, browser_1, router_1, app_1, router_2, http_1, album_service_1, genre_service_1, cart_service_1, order_service_1, checkout_service_1, http_2;
    var AuthHeaders;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
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
            }],
        execute: function() {
            AuthHeaders = (function (_super) {
                __extends(AuthHeaders, _super);
                function AuthHeaders() {
                    _super.apply(this, arguments);
                    this.headers = new http_2.Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'bearer ' + localStorage.getItem('jwt')
                    });
                }
                return AuthHeaders;
            })(http_2.BaseRequestOptions);
            browser_1.bootstrap(app_1.AppComponent, [router_2.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                genre_service_1.GenreService,
                album_service_1.AlbumService,
                cart_service_1.CartService,
                order_service_1.OrderService,
                checkout_service_1.CheckoutService,
                router_1.ROUTER_BINDINGS,
                core_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(app_1.AppComponent),
                core_1.provide(http_2.RequestOptions, { useClass: AuthHeaders })
            ]);
        }
    }
});
