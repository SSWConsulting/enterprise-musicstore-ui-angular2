import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {GenreService} from '../../services/genre/genre.service';
import {GenreDetailComponent} from './genre-detail.component';
import {Genre} from '../../models';

@Component({
    selector: 'genres',
    template: require('./genres.component.html'),
    styles: [require('./genres.component.css')],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, GenreDetailComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/:name', component: GenreDetailComponent, as: 'Genre' }
    ])
export class GenresComponent implements OnInit {
    public genres: Genre[];

    constructor(private _genreService: GenreService, private _router: Router) {
    }

    ngOnInit() {
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
