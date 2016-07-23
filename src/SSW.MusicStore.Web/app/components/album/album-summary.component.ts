import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Album} from '../../models';

@Component({
    selector: 'album-summary',
    templateUrl: 'app/components/album/album-summary.component.html',
    styleUrls: ['app/components/album/album-summary.component.css'],
    directives: [CORE_DIRECTIVES]
})

export class AlbumSummary  {
    @Input() album: Album;
}
