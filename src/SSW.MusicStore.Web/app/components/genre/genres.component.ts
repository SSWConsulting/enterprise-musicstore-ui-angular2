import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {GenreService} from '../../services/genre/genre.service';
import {GenreDetailComponent} from './genre-detail.component';
import {Genre} from '../../models';

@Component({
    selector: 'genres',
    templateUrl: './components/genre/genres.component.html',
    styleUrls: ['./components/genre/genres.component.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, GenreDetailComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/:name', component: GenreDetailComponent, as: 'Genre' }
    ])
export class GenresComponent implements OnInit {
    public genres: Genre[];

    constructor(private _genreService: GenreService, private _router: Router) {
    }

    onInit() {
        this.getGenres();
    }

    getGenres() {
        this.genres = [];
        this._genreService.getGenres()
            .subscribe(genres => this.genres = genres);
    }

    goToGenre(genre: Genre) {
       this._router.navigate([`/Genres/Genre` , { name: genre.name }]);
    }


}
