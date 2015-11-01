var genres_component_1 = require('./components/genre/genres.component');
var album_1 = require('./components/album/album');
var genre_detail_component_1 = require('./components/genre/genre-detail.component');
var dashboard_1 = require('./components/dashboard/dashboard');
var login_1 = require('./components/login/login');
var cart_1 = require('./components/cart/cart');
var checkout_1 = require('./components/checkout/checkout');
exports.Routes = {
    dashboard: {
        path: '/',
        as: 'Dashboard',
        component: dashboard_1.DashboardComponent
    },
    genres: {
        path: '/genres',
        as: 'Genres',
        component: genres_component_1.GenresComponent
    },
    album: {
        path: '/album/:id',
        as: 'Album',
        component: album_1.AlbumDetailComponent
    },
    genre: {
        path: '/genre/:name',
        as: 'Genre',
        component: genre_detail_component_1.GenreDetailComponent
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
    }
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSxzQkFBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RCx1Q0FBbUMsMkNBQTJDLENBQUMsQ0FBQTtBQUMvRSwwQkFBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRSxzQkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxxQkFBNEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNyRCx5QkFBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUV0RCxjQUFNLEdBQUc7SUFDaEIsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLEdBQUc7UUFDVCxFQUFFLEVBQUUsV0FBVztRQUNmLFNBQVMsRUFBRSw4QkFBa0I7S0FDaEM7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUztRQUNmLEVBQUUsRUFBRSxRQUFRO1FBQ1osU0FBUyxFQUFFLGtDQUFlO0tBQzdCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLFlBQVk7UUFDbEIsRUFBRSxFQUFFLE9BQU87UUFDWCxTQUFTLEVBQUUsNEJBQW9CO0tBQ2xDO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLGNBQWM7UUFDcEIsRUFBRSxFQUFFLE9BQU87UUFDWCxTQUFTLEVBQUUsNkNBQW9CO0tBQ2xDO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLFFBQVE7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLFNBQVMsRUFBRSxzQkFBYztLQUM1QjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxPQUFPO1FBQ2IsRUFBRSxFQUFFLE1BQU07UUFDVixTQUFTLEVBQUUsb0JBQWE7S0FDM0I7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsV0FBVztRQUNqQixFQUFFLEVBQUUsVUFBVTtRQUNkLFNBQVMsRUFBRSw0QkFBaUI7S0FDL0I7Q0FFSixDQUFDO0FBRVcsa0JBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLGNBQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJyb3V0ZS5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dlbnJlc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2dlbnJlL2dlbnJlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtBbGJ1bURldGFpbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FsYnVtL2FsYnVtJztcbmltcG9ydCB7R2VucmVEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9nZW5yZS9nZW5yZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xuaW1wb3J0IHtDYXJ0Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvY2FydC9jYXJ0JztcbmltcG9ydCB7Q2hlY2tvdXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC9jaGVja291dCc7XG5cbmV4cG9ydCB2YXIgUm91dGVzID0ge1xuICAgIGRhc2hib2FyZDoge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIGFzOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcbiAgICB9LFxuICAgIGdlbnJlczoge1xuICAgICAgICBwYXRoOiAnL2dlbnJlcycsXG4gICAgICAgIGFzOiAnR2VucmVzJyxcbiAgICAgICAgY29tcG9uZW50OiBHZW5yZXNDb21wb25lbnRcbiAgICB9LFxuICAgIGFsYnVtOiB7XG4gICAgICAgIHBhdGg6ICcvYWxidW0vOmlkJyxcbiAgICAgICAgYXM6ICdBbGJ1bScsXG4gICAgICAgIGNvbXBvbmVudDogQWxidW1EZXRhaWxDb21wb25lbnRcbiAgICB9LFxuICAgIGdlbnJlOiB7XG4gICAgICAgIHBhdGg6ICcvZ2VucmUvOm5hbWUnLFxuICAgICAgICBhczogJ0dlbnJlJyxcbiAgICAgICAgY29tcG9uZW50OiBHZW5yZURldGFpbENvbXBvbmVudFxuICAgIH0sXG4gICAgbG9naW46IHtcbiAgICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICAgIGFzOiAnTG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gICAgfSxcbiAgICBjYXJ0OiB7XG4gICAgICAgIHBhdGg6ICcvY2FydCcsXG4gICAgICAgIGFzOiAnQ2FydCcsXG4gICAgICAgIGNvbXBvbmVudDogQ2FydENvbXBvbmVudFxuICAgIH0sXG4gICAgY2hlY2tvdXQ6IHtcbiAgICAgICAgcGF0aDogJy9jaGVja291dCcsXG4gICAgICAgIGFzOiAnQ2hlY2tvdXQnLFxuICAgICAgICBjb21wb25lbnQ6IENoZWNrb3V0Q29tcG9uZW50XG4gICAgfVxuXG59O1xuXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUyA9IE9iamVjdC5rZXlzKFJvdXRlcykubWFwKHIgPT4gUm91dGVzW3JdKTtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9