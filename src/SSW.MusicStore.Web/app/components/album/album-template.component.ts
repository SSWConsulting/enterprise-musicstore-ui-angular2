import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Album, User} from '../../models';
import {tokenNotExpired} from 'angular2-jwt';

@Component({
    selector: 'album-template',
    styleUrls: [
        'app/components/album/album-template.component.css'
    ],
    templateUrl: 'app/components/album/album-template.component.html',
    directives: [CORE_DIRECTIVES]
})
export class AlbumTemplate {
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
