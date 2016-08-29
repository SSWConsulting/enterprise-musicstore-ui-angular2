import {Component, Input, Output, EventEmitter} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

import {Album, User} from '../models';

@Component({
    selector: 'ms-album-detail',
    styleUrls: ['album-detail.component.css'],
    templateUrl: 'album-detail.component.html',
})
export class AlbumDetailComponent {
    @Input() album: Album;
    @Input() user: User;
    @Output('selected') selected = new EventEmitter();

    onSelect(album) {
        this.selected.next(album);
    }

    loggedIn() {
        return tokenNotExpired();
    }
}
