import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Album} from '../../models';
import {AlbumService} from '../../services/album.service';
import {Routes} from '../../route.config';
import {AlbumTemplate} from './album-template';

@Component({
    selector: 'album-detail',
    templateUrl: './components/album/album.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, AlbumTemplate]
    //inputs: ['album']
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
            this.getAlbum(this.id);
        }
    }

    getAlbum(id: number) {
        this._albumService.getAlbum(id)
            .then(album => {
                album.created = moment(album.created).format('MMMM, YYYY');
                this.album = album;
                }
            );
    }

    //TODO: Wire up back to last genre not all genres
    goToGenre(album: Album) {
        this._router.navigate([`/${Routes.genres.as}`]);
    }

    // TODO: implement route to mvc shopping cart
    //goToCart() {
    //  this._router.navigate([`/${Routes.album.as}`]);
    //}
}
