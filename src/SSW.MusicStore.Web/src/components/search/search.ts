import {Control, FORM_DIRECTIVES, NgFor, NgIf, AsyncPipe} from 'angular2/common';
import {Component,EventEmitter, ChangeDetectionStrategy, Output, } from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {AlbumService} from '../../services/album/album.service';
import {Album} from '../../models';

@Component({
    selector: 'search',
    template: require('./search.html'),
    styles: [require('./search.css')],
    directives: [FORM_DIRECTIVES, NgFor, NgIf],
    changeDetection: ChangeDetectionStrategy.OnPush,
    pipes: [AsyncPipe],
    providers: [AlbumService]
})

export class Search {
    @Output('selected') selected = new EventEmitter();

    clear = new EventEmitter();

    searchText = new Control();

    albums: Observable<Album[]>;

    constructor(http: Http, albumService: AlbumService) {

       this.albums = Observable.from(this.searchText.valueChanges,null)
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

