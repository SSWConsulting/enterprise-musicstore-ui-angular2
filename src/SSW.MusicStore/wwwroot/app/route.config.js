var genres_component_1 = require('./genres.component');
var album_detail_component_1 = require('./album-detail.component');
var genre_detail_component_1 = require('./genre-detail.component');
var dashboard_component_1 = require('./dashboard.component');
exports.Routes = {
    dashboard: {
        path: '/',
        as: 'Dashboard',
        component: dashboard_component_1.DashboardComponent
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
//# sourceMappingURL=route.config.js.map