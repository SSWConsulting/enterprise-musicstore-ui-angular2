import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';
import {Album} from '../../models';
import {GenreService} from '../../services/genre/genre.service';
import {AlbumSummaryComponent} from '../../album/album-summary.component';
import * as md from './../../angular-material/index'

@Component({
  moduleId: module.id,
  selector: 'ms-genre-detail',
  templateUrl: 'genre-detail.component.html',
  styleUrls: ['genre-detail.component.css'],
  directives: [
    CORE_DIRECTIVES,
    AlbumSummaryComponent,
    md.MD_PROGRESS_CIRCLE_DIRECTIVES
  ],
  inputs: ['genre']
})
export class GenreDetailComponent implements OnInit {
  albums: Album[];
  name: string;

  constructor(private _genreService: GenreService,
    private _router: Router) {
  }
  
  ngOnInit() {}

  routerOnActivate(
    current: RouteSegment,
    prev?: RouteSegment,
    currTree?: RouteTree,
    prevTree?: RouteTree
  ) {
    if (!this.albums) {
      let name = current.getParam('name');
      this.getGenreAlbums(name);
    }
  }

  getGenreAlbums(name: string) {
    this._genreService.getGenreAlbums(name)
      .subscribe(albums =>
        this.albums = albums
      );
  }

  goToAlbumDetail(album: Album) {
    this._router.navigate([`/album/${album.albumId}`]);
  }
}
