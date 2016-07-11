import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Router, OnActivate, ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {GenreService} from '../services/genre/genre.service';
import {GenreDetailComponent} from './genre-detail/genre-detail.component';
import {Genre} from '../models';
import * as md from './../angular-material/index'

@Component({
  moduleId: module.id,
  selector: 'ms-genres',
  templateUrl: 'genres.component.html',
  styleUrls: ['genres.component.css'],
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    GenreDetailComponent,
    ROUTER_DIRECTIVES,
    md.MD_LIST_DIRECTIVES,
    md.MdList,
    md.MdListItem,
    md.MD_CARD_DIRECTIVES,
    md.MdCard,
    md.MD_PROGRESS_BAR_DIRECTIVES,
    md.MdProgressBar
  ]
})
@Routes([
  { path: '/:name', component: GenreDetailComponent }
])
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
        this.genres = genres
        this.isLoading = false;
      });
  }

  goToGenre(genre: Genre) {
    this._router.navigate([`/genres/${genre.name}`]);
  }
}

