import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Album} from '../../models';
import {GenreService} from '../../services/genre.service';
import {Routes} from '../../route.config';
import {AlbumSummary} from '../album/album-summary';

@Component({
  selector: 'genre-detail',
  templateUrl: './components/genre/genre-detail.component.html',
  directives: [CORE_DIRECTIVES, AlbumSummary],
  styleUrls: ['./components/genre/genre-detail.component.css'],
  inputs: ['genre']
})
export class GenreDetailComponent implements OnInit {
  albums: Album[];
  name: string;

  constructor(private _genreService: GenreService,
    private _routeParams: RouteParams, private _router: Router) {
  }

  onInit() {
    if (!this.albums) {
      this.name = this._routeParams.get('name');
      return this.albums = this.getGenreAlbums(this.name);
    }
  }

  getGenreAlbums(name: string) {
    this._genreService.getGenreAlbums(name)
      .subscribe(albums =>
        this.albums = albums
      );
    return this.albums;
  }

  goToAlbumDetail(album: Album) {
    this._router.navigate([`/${Routes.album.as}`, { id: album.albumId }]);
  }
}
