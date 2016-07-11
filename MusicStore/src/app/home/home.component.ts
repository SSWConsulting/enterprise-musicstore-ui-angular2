import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as md from './../angular-material/index';

import { Album } from '../models';
import { AlbumService } from '../services/album/album.service';
import { AlbumSummaryComponent } from '../album/album-summary.component';
import { SearchComponent } from '../search/search.component';


@Component({
  moduleId: module.id,
  selector: 'ms-home',
  encapsulation: ViewEncapsulation.None,
  directives: [SearchComponent, AlbumSummaryComponent],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  public albums: Album[] = [];
  
  constructor(private _albumService: AlbumService, private _router: Router) {
  }

  ngOnInit() {
    this.getPopularAlbums();
  }

  goToAlbumDetail(album: Album) {
    this._router.navigate([`/album/${album.albumId}`]);
  }

  getPopularAlbums() {
    this._albumService.getPopularAlbums()
      .subscribe(albums =>
        this.albums = albums
      );
  }

}
