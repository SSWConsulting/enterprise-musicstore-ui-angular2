import {Component, Input} from '@angular/core';
import {Album} from '../models';

@Component({
    moduleId: module.id,
    selector: 'ms-album-summary',
    templateUrl: 'album-summary.component.html',
    styleUrls: ['album-summary.component.css'],
    directives: []
})

export class AlbumSummaryComponent  {
    @Input() album: Album;
}
