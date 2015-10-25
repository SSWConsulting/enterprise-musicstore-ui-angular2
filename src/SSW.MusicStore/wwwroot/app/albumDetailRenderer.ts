import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Album} from './models';
import {Routes} from './route.config';


@Component({
    selector: 'album-detail-renderer',
    templateUrl: 'app/albumDetailRenderer.html',
    styleUrls: ['app/albumDetailRenderer.css'],
    directives: [CORE_DIRECTIVES]
})

export class AlbumDetailRenderer {
    @Input() album: Album;

    notImplemented() {
        alert('not implemented yet');
    }
}