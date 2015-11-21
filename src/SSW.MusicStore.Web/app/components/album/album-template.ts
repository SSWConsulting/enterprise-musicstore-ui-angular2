import {Component, CORE_DIRECTIVES, Input, Output, EventEmitter} from 'angular2/angular2';
import {Album} from '../../models';

@Component({
    selector: 'album-template',
    styleUrls: [
        './components/album/album-template.css'
    ],
    templateUrl: './components/album/album-template.html',
    directives: [CORE_DIRECTIVES]
})
export class AlbumTemplate {
    @Input() album: Album;
    @Output('selected') selected = new EventEmitter();

    onSelect(album) {
        this.selected.next(album);
    }
}
