import {GenresComponent} from './genres.component';
import {AlbumDetailComponent} from './album-detail.component';
import {GenreDetailComponent} from './genre-detail.component';
import {DashboardComponent} from './dashboard.component';

export var Routes = {
    dashboard: {
        path: '/',
        as: 'Dashboard',
        component: DashboardComponent
    },
    genres: {
        path: '/genres',
        as: 'Genres',
        component: GenresComponent
    },
    album: {
        path: '/album/:id',
        as: 'Album',
        component: AlbumDetailComponent
    },
    genre: {
        path: '/genre/:name',
        as: 'Genre',
        component: GenreDetailComponent
    }

};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
