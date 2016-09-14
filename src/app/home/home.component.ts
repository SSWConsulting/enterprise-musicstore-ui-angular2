import { Component, OnInit } from '@angular/core';

import { Album } from '../models';
import { AlbumService } from '../services/album/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private albums: Album[] = [];

  constructor(private _albumService: AlbumService) {
  }

  ngOnInit() {
    this.getPopularAlbums();
  }

  getPopularAlbums() {
    this._albumService.getPopularAlbums()
      .subscribe(albums =>
        this.albums = albums
      );
  }

}
