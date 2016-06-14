import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {Album} from '../../models';
import {GenreService} from '../../services/genre/genre.service';
import {Routes} from '../../route.config';
import {AlbumSummary} from '../album/album-summary.component';

@Component({
  selector: 'genre-detail',
  templateUrl: 'app/components/genre/genre-detail.component.html',
  directives: [CORE_DIRECTIVES, AlbumSummary],
  styleUrls: ['app/components/genre/genre-detail.component.css'],
  inputs: ['genre']
})
export class GenreDetailComponent implements OnInit {
  albums: Album[];
  name: string;

  constructor(private _genreService: GenreService,
    private _routeParams: RouteParams, private _router: Router) {
  }

  ngOnInit() {
    if (!this.albums) {
      this.name = this._routeParams.get('name');
      this.getGenreAlbums(this.name);
    }
  }

  getGenreAlbums(name: string) {
    this._genreService.getGenreAlbums(name)
      .subscribe(albums =>
        this.albums = albums
      );
  }

  goToAlbumDetail(album: Album) {
    this._router.navigate([`/${Routes.album.as}`, { id: album.albumId }]);
  }
}
