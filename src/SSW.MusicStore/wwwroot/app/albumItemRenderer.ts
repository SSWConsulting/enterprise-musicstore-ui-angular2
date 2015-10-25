import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Album} from './models';
import {Routes} from './route.config';


@Component({
    selector: 'album-item-renderer',
    templateUrl: 'app/albumItemRenderer.html',
    styleUrls: ['app/albumItemRenderer.css'],
    directives: [CORE_DIRECTIVES]
})

export class AlbumItemRenderer  {
    @Input() album: Album;
}