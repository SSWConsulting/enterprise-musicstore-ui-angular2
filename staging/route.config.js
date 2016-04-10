System.register(['./components/genre/genres.component', './components/album/album.component', './components/dashboard/dashboard.component', './components/login/login.component', './components/cart/cart.component', './components/checkout/checkout.component', './components/order/order.component'], function(exports_1) {
    var genres_component_1, album_component_1, dashboard_component_1, login_component_1, cart_component_1, checkout_component_1, order_component_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (genres_component_1_1) {
                genres_component_1 = genres_component_1_1;
            },
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (cart_component_1_1) {
                cart_component_1 = cart_component_1_1;
            },
            function (checkout_component_1_1) {
                checkout_component_1 = checkout_component_1_1;
            },
            function (order_component_1_1) {
                order_component_1 = order_component_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                dashboard: {
                    path: '/',
                    as: 'Dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                genres: {
                    path: '/genres/...',
                    as: 'Genres',
                    component: genres_component_1.GenresComponent
                },
                album: {
                    path: '/album/:id',
                    as: 'Album',
                    component: album_component_1.AlbumDetailComponent
                },
                login: {
                    path: '/login',
                    as: 'Login',
                    component: login_component_1.LoginComponent
                },
                cart: {
                    path: '/cart',
                    as: 'Cart',
                    component: cart_component_1.CartComponent
                },
                checkout: {
                    path: '/checkout',
                    as: 'Checkout',
                    component: checkout_component_1.CheckoutComponent
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
