import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
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
