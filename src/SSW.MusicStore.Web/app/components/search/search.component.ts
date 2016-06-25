import {Control, FORM_DIRECTIVES, NgFor, NgIf, AsyncPipe} from '@angular/common';
import {Component,EventEmitter, ChangeDetectionStrategy, Output, } from '@angular/core';
import {Http} from '@angular/http';
import {AlbumService} from '../../services/album/album.service';
import {Album} from '../../models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mapTo';


@Component({
    selector: 'search',
    templateUrl: 'app/components/search/search.component.html',
    styleUrls: ['app/components/search/search.component.css'],
    directives: [FORM_DIRECTIVES, NgFor, NgIf],
    changeDetection: ChangeDetectionStrategy.OnPush,
    pipes: [AsyncPipe],
    providers: [AlbumService]
})

export class Search {
    @Output('selected') selected = new EventEmitter();

    clear = new EventEmitter();

    searchText = new Control();

    albums: Observable<any>;

    constructor(http: Http, albumService: AlbumService) {
       this.albums = this.searchText.valueChanges
           .debounceTime(500)
           .distinctUntilChanged()
           .switchMap((val: string) => albumService.search(val))
           .merge(this.clear.mapTo([]));
    }

    onSelect(album) {
        this.selected.next(album);
        this.clear.next('');
    }
}

