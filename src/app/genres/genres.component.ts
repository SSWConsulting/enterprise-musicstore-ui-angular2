import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GenreService} from '../services/genre/genre.service';
import {Genre} from '../models';

@Component({
  selector: 'app-genres',
  templateUrl: 'genres.component.html',
  styleUrls: ['genres.component.css']
})
export class GenresComponent implements OnInit {
  public genres: Genre[];
  isLoading: boolean = false;

  constructor(private _genreService: GenreService, private _router: Router) {
  }

  ngOnInit() {
    this.getGenres();
    this._router.navigate([`/genres/Pop`]);
  }

  getGenres() {
    this.genres = [];
    this.isLoading = true;
    this._genreService.getGenres()
      .subscribe(genres => {
        this.genres = genres;
        this.isLoading = false;
      });
  }

  goToGenre(genre: Genre) {
    this._router.navigate([`/genres/${genre.name}`]);
  }
}