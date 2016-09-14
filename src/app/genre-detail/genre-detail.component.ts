import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Album} from '../models';
import {GenreService} from '../services/genre/genre.service';

@Component({
  selector: 'app-genre-detail',
  templateUrl: 'genre-detail.component.html',
  styleUrls: ['genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit, OnDestroy {
  private paramSub: any;
  private albums: Album[];

  constructor(
    private _genreService: GenreService,
    private _router: Router,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramSub = this._route.params.subscribe(params => {
      let name = params['name'];
      this.getGenreAlbums(name);
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
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