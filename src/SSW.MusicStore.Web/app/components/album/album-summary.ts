import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {Album} from '../../models';

@Component({
    selector: 'album-summary',
    templateUrl: './components/album/album-summary.html',
    styleUrls: ['./components/album/album-summary.css'],
    directives: [CORE_DIRECTIVES]
})

export class AlbumSummary  {
    @Input() album: Album;
}
