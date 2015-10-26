import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {Album} from '../../models';

@Component({
    selector: 'album-item-renderer',
    templateUrl: './components/album/albumItemRenderer.html',
    styleUrls: ['./components/album/albumItemRenderer.css'],
    directives: [CORE_DIRECTIVES]
})

export class AlbumItemRenderer  {
    @Input() album: Album;
}
