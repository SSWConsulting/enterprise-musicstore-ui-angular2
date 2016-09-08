import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Album} from '../../models';
import {GenreService} from '../../services/genre/genre.service';

@Component({
  selector: 'ms-genre-detail',
  templateUrl: 'genre-detail.component.html',
  styleUrls: ['genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  albums: Album[];
  name: string;
  subscription: any;
  @Input() genre: any;

  constructor(private _genreService: GenreService,
    private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.albums) {
          this.subscription = this._route
              .params
              .subscribe((params) => {
                  let name = params['name'].toString();
                  this.getGenreAlbums(name);
              });
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
