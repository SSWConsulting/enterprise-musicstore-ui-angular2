import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Album} from './Models';
import {AlbumService} from './album.service';
import {Routes} from './route.config';
import {AlbumDetailRenderer} from './albumDetailRenderer';

@Component({
  selector: 'album-detail',
  templateUrl: 'app/album-detail.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, AlbumDetailRenderer],
  inputs: ['album']
})
export class AlbumDetailComponent implements OnInit {
    album: Album;
    id: number;

  constructor(private _albumService: AlbumService,
    private _routeParams: RouteParams, private _router: Router) {
  }

  onInit() {
    if (!this.album) {
      this.id = parseInt(this._routeParams.get('id'));
      return this.album = this.getAlbum(this.id);
    }
  }

  getAlbum(id: number) {
      return this._albumService.getAlbum(id)
          .then(album => {
              album.created = moment(album.created).format('MMMM, YYYY');
              this.album = album
          }
      );

      //TODO: why date pipe failing ?
      return this.album;

  }

   //TODO: Wire up back to last genre not all genres
  goToGenre(album:Album) {
      this._router.navigate([`/${Routes.genres.as}`]);
  }

  // TODO: implement route to mvc shopping cart
  //goToCart() {
  //  this._router.navigate([`/${Routes.album.as}`]);
  //}
}
