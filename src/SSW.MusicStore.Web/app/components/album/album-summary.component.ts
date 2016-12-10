import {Component, Input} from '@angular/core';
import {Album} from '../../models';

@Component({
    selector: 'album-summary',
    templateUrl: 'app/components/album/album-summary.component.html',
    styleUrls: ['app/components/album/album-summary.component.css'],
})

export class AlbumSummary  {
    @Input() album: Album;
}
