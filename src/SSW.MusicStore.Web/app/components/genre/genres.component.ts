import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {RouterConfig, Router, ROUTER_DIRECTIVES } from '@angular/router';
import {GenreService} from '../../services/genre/genre.service';
import {GenreDetailComponent} from './genre-detail.component';
import {Genre} from '../../models';

@Component({
    selector: 'genres',
    templateUrl: 'app/components/genre/genres.component.html',
    styleUrls: ['app/components/genre/genres.component.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, GenreDetailComponent, ROUTER_DIRECTIVES]
})
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
       this._router.navigate([`/genres/genre` , genre.name]);
    }


}
