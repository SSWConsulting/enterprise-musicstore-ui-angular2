import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Album } from '../models';
import { AlbumService } from '../services/album/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private albums: Album[] = [];


  constructor(private _albumService: AlbumService, private _router: Router) {
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

  goToAlbumDetail(album: Album) {
    this._router.navigate(['/album', album.albumId]);
  }

}
