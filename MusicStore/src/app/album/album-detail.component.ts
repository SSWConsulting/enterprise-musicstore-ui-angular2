import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Album, User} from '../models';
import {tokenNotExpired} from 'angular2-jwt';

@Component({
    moduleId: module.id,
    selector: 'ms-album-detail',
    styleUrls: ['album-template.component.css'],
    templateUrl: 'album-template.component.html',
    directives: [CORE_DIRECTIVES]
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
