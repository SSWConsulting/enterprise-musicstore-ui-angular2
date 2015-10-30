import {GenresComponent} from './components/genre/genres.component';
import {AlbumDetailComponent} from './components/album/album';
import {GenreDetailComponent} from './components/genre/genre-detail.component';
import {DashboardComponent} from './components/dashboard/dashboard';
import {LoginComponent} from './components/login/login';

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
    },
    login: {
        path: '/login',
        as: 'Login',
        component: LoginComponent
    }

};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);

