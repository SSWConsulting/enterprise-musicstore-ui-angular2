import {Component, Input} from '@angular/core';
import * as md from '../angular-material/index'
import {Album} from '../models';

@Component({
    moduleId: module.id,
    selector: 'ms-album-summary',
    templateUrl: 'album-summary.component.html',
    styleUrls: ['album-summary.component.css'],
    directives: [
        md.MD_CARD_DIRECTIVES,
        md.MdCard,
        md.MdCardHeader,
        md.MdCardTitleGroup
    ]
})

export class AlbumSummaryComponent  {
    @Input() album: Album;
}
