System.register(['./components/genre/genres.component', './components/album/album', './components/dashboard/dashboard', './components/login/login', './components/cart/cart', './components/checkout/checkout', './components/order/order.component'], function(exports_1) {
    var genres_component_1, album_1, dashboard_1, login_1, cart_1, checkout_1, order_component_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (genres_component_1_1) {
                genres_component_1 = genres_component_1_1;
            },
            function (album_1_1) {
                album_1 = album_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (cart_1_1) {
                cart_1 = cart_1_1;
            },
            function (checkout_1_1) {
                checkout_1 = checkout_1_1;
            },
            function (order_component_1_1) {
                order_component_1 = order_component_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                dashboard: {
                    path: '/',
                    as: 'Dashboard',
                    component: dashboard_1.DashboardComponent
                },
                genres: {
                    path: '/genres/...',
                    as: 'Genres',
                    component: genres_component_1.GenresComponent
                },
                album: {
                    path: '/album/:id',
                    as: 'Album',
                    component: album_1.AlbumDetailComponent
                },
                login: {
                    path: '/login',
                    as: 'Login',
                    component: login_1.LoginComponent
                },
                cart: {
                    path: '/cart',
                    as: 'Cart',
                    component: cart_1.CartComponent
                },
                checkout: {
                    path: '/checkout',
                    as: 'Checkout',
                    component: checkout_1.CheckoutComponent
                },
                orders: {
                    path: '/orders',
                    as: 'Orders',
                    component: order_component_1.OrderComponent
                }
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});
