import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {Album} from '../../models';

@Component({
    selector: 'album-detail-renderer',
    template: './components/album/albumDetailRenderer.html',
    styleUrls: ['./components/album/albumDetailRenderer.css'],
    directives: [CORE_DIRECTIVES]
})

export class AlbumDetailRenderer {
    @Input() album: Album;
}
