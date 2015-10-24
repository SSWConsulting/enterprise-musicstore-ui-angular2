import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Album} from './Models';
import {AlbumService} from './album.service';
import {Routes} from './route.config';

@Component({
  selector: 'album-detail',
  templateUrl: 'app/album-detail.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  inputs: ['album']
})
export class AlbumDetailComponent implements OnInit {
  public album;

  constructor(private _albumService: AlbumService,
    private _routeParams: RouteParams, private _router: Router) {
  }

  onInit() {
    if (!this.album) {
      let id = +this._routeParams.get('id');
      this._albumService.getAlbum(id).then((album) => this.album = album);
    }
  }

  gotoAlbum() {
    this._router.navigate([`/${Routes.album.as}`]);
  }
}
