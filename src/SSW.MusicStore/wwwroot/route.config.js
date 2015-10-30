var genres_component_1 = require('./components/genre/genres.component');
var album_1 = require('./components/album/album');
var genre_detail_component_1 = require('./components/genre/genre-detail.component');
var dashboard_1 = require('./components/dashboard/dashboard');
var login_1 = require('./components/login/login');
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
    }
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSxzQkFBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RCx1Q0FBbUMsMkNBQTJDLENBQUMsQ0FBQTtBQUMvRSwwQkFBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRSxzQkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUU3QyxjQUFNLEdBQUc7SUFDaEIsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLEdBQUc7UUFDVCxFQUFFLEVBQUUsV0FBVztRQUNmLFNBQVMsRUFBRSw4QkFBa0I7S0FDaEM7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUztRQUNmLEVBQUUsRUFBRSxRQUFRO1FBQ1osU0FBUyxFQUFFLGtDQUFlO0tBQzdCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLFlBQVk7UUFDbEIsRUFBRSxFQUFFLE9BQU87UUFDWCxTQUFTLEVBQUUsNEJBQW9CO0tBQ2xDO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLGNBQWM7UUFDcEIsRUFBRSxFQUFFLE9BQU87UUFDWCxTQUFTLEVBQUUsNkNBQW9CO0tBQ2xDO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLFFBQVE7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLFNBQVMsRUFBRSxzQkFBYztLQUM1QjtDQUVKLENBQUM7QUFFVyxrQkFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsY0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6InJvdXRlLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2VucmVzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZ2VucmUvZ2VucmVzLmNvbXBvbmVudCc7XG5pbXBvcnQge0FsYnVtRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYWxidW0vYWxidW0nO1xuaW1wb3J0IHtHZW5yZURldGFpbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2dlbnJlL2dlbnJlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkJztcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbic7XG5cbmV4cG9ydCB2YXIgUm91dGVzID0ge1xuICAgIGRhc2hib2FyZDoge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIGFzOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcbiAgICB9LFxuICAgIGdlbnJlczoge1xuICAgICAgICBwYXRoOiAnL2dlbnJlcycsXG4gICAgICAgIGFzOiAnR2VucmVzJyxcbiAgICAgICAgY29tcG9uZW50OiBHZW5yZXNDb21wb25lbnRcbiAgICB9LFxuICAgIGFsYnVtOiB7XG4gICAgICAgIHBhdGg6ICcvYWxidW0vOmlkJyxcbiAgICAgICAgYXM6ICdBbGJ1bScsXG4gICAgICAgIGNvbXBvbmVudDogQWxidW1EZXRhaWxDb21wb25lbnRcbiAgICB9LFxuICAgIGdlbnJlOiB7XG4gICAgICAgIHBhdGg6ICcvZ2VucmUvOm5hbWUnLFxuICAgICAgICBhczogJ0dlbnJlJyxcbiAgICAgICAgY29tcG9uZW50OiBHZW5yZURldGFpbENvbXBvbmVudFxuICAgIH0sXG4gICAgbG9naW46IHtcbiAgICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICAgIGFzOiAnTG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gICAgfVxuXG59O1xuXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUyA9IE9iamVjdC5rZXlzKFJvdXRlcykubWFwKHIgPT4gUm91dGVzW3JdKTtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9