import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {GenreService} from '../../services/genre.service';
import {GenreDetailComponent} from './genre-detail.component';
import {Genre} from '../../models';
import {Routes} from '../../route.config';

@Component({
    selector: 'my-genres',
    templateUrl: './components/genre/genres.component.html',
    styleUrls: ['./components/genre/genres.component.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, GenreDetailComponent]
})
export class GenresComponent implements OnInit {
    public genres: Genre[];

    constructor(private _genreService: GenreService, private _router: Router) {
    }

    onInit() {
        this.genres = this.getGenres();
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

}
