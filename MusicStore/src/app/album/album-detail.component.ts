import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {tokenNotExpired} from 'angular2-jwt';

import {Album, User} from '../models';

@Component({
    moduleId: module.id,
    selector: 'ms-album-detail',
    styleUrls: ['album-detail.component.css'],
    templateUrl: 'album-detail.component.html',
    directives: [
        CORE_DIRECTIVES,
        MD_CARD_DIRECTIVES
    ]
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
