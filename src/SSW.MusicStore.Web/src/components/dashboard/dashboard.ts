import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Album} from '../../models';
import {AlbumService} from '../../services/album/album.service';
import {AlbumSummary} from '../album/album-summary';
import {Search} from '../search/search';

@Component({
    selector: 'dashboard',
    template: require('./dashboard.html'),
    styles: [require('./dashboard.css')],
    directives: [CORE_DIRECTIVES, AlbumSummary, Search ]
})
export class DashboardComponent implements OnInit {
    public albums: Album[] = [];
    searching: boolean;

    constructor(private _albumService: AlbumService) {
    }

    ngOnInit() {
       this.getPopularAlbums();
    }

    hide() {
        this.searching = true;
        alert(this.searching);
    }

    getPopularAlbums() {
        this._albumService.getPopularAlbums()
            .subscribe(albums =>
                this.albums = albums
            );
    }
}
