import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Genre} from './models';
import {GenreService} from './genre.service';
import {Routes} from './route.config';

@Component({
  selector: 'genre-detail',
  templateUrl: 'app/genre-detail.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  inputs: ['genre']
})
export class GenreDetailComponent implements OnInit {
  public genre;

  constructor(private _genreService: GenreService,
    private _routeParams: RouteParams, private _router: Router) {
  }

  onInit() {
    if (!this.genre) {
      let name:string = this._routeParams.get('name');
      this._genreService.getGenre(name).then((genre) => this.genre = genre);
    }
  }

  gotoAlbums() {
    this._router.navigate([`/${Routes.genres.as}`]);
  }
}
