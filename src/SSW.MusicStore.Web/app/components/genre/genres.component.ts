import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreService } from '../../services/genre/genre.service';
import { Genre } from '../../models';

@Component({
    selector: 'genres',
    templateUrl: 'app/components/genre/genres.component.html',
    styleUrls: ['app/components/genre/genres.component.css']
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
        this._router.navigate([`/genres/genre`, genre.name]);
    }


}
