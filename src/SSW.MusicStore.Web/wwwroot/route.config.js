var genres_component_1 = require('./components/genre/genres.component');
var album_1 = require('./components/album/album');
var genre_detail_component_1 = require('./components/genre/genre-detail.component');
var dashboard_1 = require('./components/dashboard/dashboard');
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
    }
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSxzQkFBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RCx1Q0FBbUMsMkNBQTJDLENBQUMsQ0FBQTtBQUMvRSwwQkFBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUV6RCxjQUFNLEdBQUc7SUFDaEIsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLEdBQUc7UUFDVCxFQUFFLEVBQUUsV0FBVztRQUNmLFNBQVMsRUFBRSw4QkFBa0I7S0FDaEM7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUztRQUNmLEVBQUUsRUFBRSxRQUFRO1FBQ1osU0FBUyxFQUFFLGtDQUFlO0tBQzdCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLFlBQVk7UUFDbEIsRUFBRSxFQUFFLE9BQU87UUFDWCxTQUFTLEVBQUUsNEJBQW9CO0tBQ2xDO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLGNBQWM7UUFDcEIsRUFBRSxFQUFFLE9BQU87UUFDWCxTQUFTLEVBQUUsNkNBQW9CO0tBQ2xDO0NBRUosQ0FBQztBQUVXLGtCQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxjQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUMiLCJmaWxlIjoicm91dGUuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZW5yZXNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9nZW5yZS9nZW5yZXMuY29tcG9uZW50JztcbmltcG9ydCB7QWxidW1EZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hbGJ1bS9hbGJ1bSc7XG5pbXBvcnQge0dlbnJlRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZ2VucmUvZ2VucmUtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQnO1xuXG5leHBvcnQgdmFyIFJvdXRlcyA9IHtcbiAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBhczogJ0Rhc2hib2FyZCcsXG4gICAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50XG4gICAgfSxcbiAgICBnZW5yZXM6IHtcbiAgICAgICAgcGF0aDogJy9nZW5yZXMnLFxuICAgICAgICBhczogJ0dlbnJlcycsXG4gICAgICAgIGNvbXBvbmVudDogR2VucmVzQ29tcG9uZW50XG4gICAgfSxcbiAgICBhbGJ1bToge1xuICAgICAgICBwYXRoOiAnL2FsYnVtLzppZCcsXG4gICAgICAgIGFzOiAnQWxidW0nLFxuICAgICAgICBjb21wb25lbnQ6IEFsYnVtRGV0YWlsQ29tcG9uZW50XG4gICAgfSxcbiAgICBnZW5yZToge1xuICAgICAgICBwYXRoOiAnL2dlbnJlLzpuYW1lJyxcbiAgICAgICAgYXM6ICdHZW5yZScsXG4gICAgICAgIGNvbXBvbmVudDogR2VucmVEZXRhaWxDb21wb25lbnRcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVTID0gT2JqZWN0LmtleXMoUm91dGVzKS5tYXAociA9PiBSb3V0ZXNbcl0pO1xuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=