import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Album} from '../../models';
import {AlbumService} from '../../services/album/album.service';
import {LoadingService} from '../../services/loading/loading.service';
import {LoadingIndicator} from '../loading/loading.indicator.component';
import {Routes} from '../../route.config';
import {AlbumSummary} from '../album/album-summary.component';
import {Search} from '../search/search.component';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    styleUrls: ['app/components/dashboard/dashboard.component.css'],
    directives: [CORE_DIRECTIVES, AlbumSummary, Search, LoadingIndicator ]
})
export class DashboardComponent implements OnInit {
    public albums: Album[] = [];
    searching: boolean;

    constructor(private _albumService: AlbumService, private _router: Router, private _loadingService: LoadingService) {
    }

    ngOnInit() {
        this.getPopularAlbums();
        this._loadingService.toggleLoadingIndicator(true);
    }

    hide() {
        this.searching = true;
        alert(this.searching);
    }

    goToAlbumDetail(album: Album) {
        this._router.navigate([`/${Routes.album.as}`, album.albumId]);
    }

    getPopularAlbums() {
        this._albumService.getPopularAlbums()
            .subscribe(albums => {
                this.albums = albums;
                this._loadingService.toggleLoadingIndicator(false);
            });
    }
}
