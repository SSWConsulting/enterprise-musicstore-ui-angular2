import {Component, Input} from '@angular/core';
import {Album} from '../models';

@Component({
    selector: 'ms-album-summary',
    templateUrl: 'album-summary.component.html',
    styleUrls: ['album-summary.component.css'],
})

export class AlbumSummaryComponent  {
    @Input() album: Album;
}
