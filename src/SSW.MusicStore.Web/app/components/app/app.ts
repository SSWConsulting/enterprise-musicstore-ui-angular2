import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {Routes, APP_ROUTES} from '../../route.config';
import {GenreService} from '../../services/genre.service';
import {Genre} from '../../models';

@Component({
    selector: 'app',
    templateUrl: './components/app/app.html',
    styleUrls: ['./components/app/app.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

@RouteConfig(APP_ROUTES)
export class AppComponent {
    public title = 'SSW Angular 2 Music Store';
    public routes = Routes;
    public genres: Genre[];
    constructor(private _genreService: GenreService, private _router: Router) {
        this.getGenres();
    }

    getGenres() {
        this.genres = [];
        this._genreService.getGenres()
            .then(genres => this.genres = genres);
        return this.genres;
    }

    goToGenre(genre: Genre) {
        this._router.navigate([`/${Routes.genre.as}`, { name: genre.name }]);
    }

    notImplemented() {
        alert('not implemented yet');
    }

}
