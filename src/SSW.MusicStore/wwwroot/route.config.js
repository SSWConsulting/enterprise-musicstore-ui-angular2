var genres_component_1 = require('./components/genre/genres.component');
var album_detail_component_1 = require('./components/album/album-detail.component');
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
        component: album_detail_component_1.AlbumDetailComponent
    },
    genre: {
        path: '/genre/:name',
        as: 'Genre',
        component: genre_detail_component_1.GenreDetailComponent
    }
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSx1Q0FBbUMsMkNBQTJDLENBQUMsQ0FBQTtBQUMvRSx1Q0FBbUMsMkNBQTJDLENBQUMsQ0FBQTtBQUMvRSwwQkFBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUV6RCxjQUFNLEdBQUc7SUFDaEIsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLEdBQUc7UUFDVCxFQUFFLEVBQUUsV0FBVztRQUNmLFNBQVMsRUFBRSw4QkFBa0I7S0FDaEM7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUztRQUNmLEVBQUUsRUFBRSxRQUFRO1FBQ1osU0FBUyxFQUFFLGtDQUFlO0tBQzdCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLFlBQVk7UUFDbEIsRUFBRSxFQUFFLE9BQU87UUFDWCxTQUFTLEVBQUUsNkNBQW9CO0tBQ2xDO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLGNBQWM7UUFDcEIsRUFBRSxFQUFFLE9BQU87UUFDWCxTQUFTLEVBQUUsNkNBQW9CO0tBQ2xDO0NBRUosQ0FBQztBQUVXLGtCQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxjQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUMiLCJmaWxlIjoicm91dGUuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZW5yZXNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9nZW5yZS9nZW5yZXMuY29tcG9uZW50JztcbmltcG9ydCB7QWxidW1EZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7R2VucmVEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9nZW5yZS9nZW5yZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XG5cbmV4cG9ydCB2YXIgUm91dGVzID0ge1xuICAgIGRhc2hib2FyZDoge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIGFzOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcbiAgICB9LFxuICAgIGdlbnJlczoge1xuICAgICAgICBwYXRoOiAnL2dlbnJlcycsXG4gICAgICAgIGFzOiAnR2VucmVzJyxcbiAgICAgICAgY29tcG9uZW50OiBHZW5yZXNDb21wb25lbnRcbiAgICB9LFxuICAgIGFsYnVtOiB7XG4gICAgICAgIHBhdGg6ICcvYWxidW0vOmlkJyxcbiAgICAgICAgYXM6ICdBbGJ1bScsXG4gICAgICAgIGNvbXBvbmVudDogQWxidW1EZXRhaWxDb21wb25lbnRcbiAgICB9LFxuICAgIGdlbnJlOiB7XG4gICAgICAgIHBhdGg6ICcvZ2VucmUvOm5hbWUnLFxuICAgICAgICBhczogJ0dlbnJlJyxcbiAgICAgICAgY29tcG9uZW50OiBHZW5yZURldGFpbENvbXBvbmVudFxuICAgIH1cblxufTtcblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVMgPSBPYmplY3Qua2V5cyhSb3V0ZXMpLm1hcChyID0+IFJvdXRlc1tyXSk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==