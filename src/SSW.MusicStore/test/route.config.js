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
