import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {Album} from '../../models';
import {Router} from 'angular2/router';
import {Routes} from '../../route.config';

@Component({
    selector: 'album-summary',
    template: require('./album-summary.html'),
    styles: [require('./album-summary.css')],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class AlbumSummary  {
    @Input() album: Album;
    
    constructor(private _router: Router) {
        
    }
    
    goToAlbumDetail(album: Album) {
        this._router.navigate([`/${Routes.album.as}`, { id: album.albumId }]);
    }
}
