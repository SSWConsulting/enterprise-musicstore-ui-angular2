import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Album} from './models';
import {GenreService} from './genre.service';
import {Routes} from './route.config';
import {AlbumItemRenderer} from './albumItemRenderer';

@Component({
  selector: 'genre-detail',
  templateUrl: 'app/genre-detail.component.html',
  directives: [CORE_DIRECTIVES, AlbumItemRenderer],
  styleUrls: ['app/genre-detail.component.css'],
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

  getGenreAlbums(name:string) {
      this._genreService.getGenreAlbums(name)
          .then(albums =>
              this.albums = albums
          );
      return this.albums;
  }               

  goToAlbumDetail(album: Album) {
      this._router.navigate([`/${Routes.album.as}`, { id: album.albumId }]);
  }
}
