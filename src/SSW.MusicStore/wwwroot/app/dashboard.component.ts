import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Album} from './models';
import {AlbumService} from './album.service';
import {Routes} from './route.config';
import {Http} from 'angular2/http';
import {AlbumItemRenderer} from './albumItemRenderer';


@Component({
    selector: 'ms-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    directives: [CORE_DIRECTIVES, AlbumItemRenderer ]
})
export class DashboardComponent implements OnInit {
    public albums: Album[];
    constructor(private _albumService: AlbumService, private _router: Router) {
    }

    onInit() {
        return this.albums = this.getPopularAlbums();
    }

    goToAlbumDetail(album: Album) {
        this._router.navigate([`/${Routes.album.as}`, { id: album.albumId }]);
    }

    getPopularAlbums() {
        this._albumService.getPopularAlbums()
            .then(albums =>
                this.albums = albums
            );

        return this.albums;
    }
}