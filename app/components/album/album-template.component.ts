import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Album, User} from '../../models';
import { LoginButtonComponent  } from './../login/login-button.component';

@Component({
    selector: 'album-template',
    styleUrls: [
        'app/components/album/album-template.component.css'
    ],
    templateUrl: 'app/components/album/album-template.component.html',
    directives: [CORE_DIRECTIVES, LoginButtonComponent]
})
export class AlbumTemplate {
    @Input() album: Album;
    @Input() user: User;
    @Output('selected') selected = new EventEmitter();
    loginMessage: string = 'Login to add to cart'

    onSelect(album) {
        this.selected.next(album);
    }
}
