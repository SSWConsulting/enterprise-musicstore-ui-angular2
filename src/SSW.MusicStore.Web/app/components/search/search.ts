import {Component, Control, EventEmitter, FORM_DIRECTIVES,
NgFor, NgIf, ChangeDetectionStrategy, Output} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';
import {RxPipe} from '../../services/rx-pipe/rx-pipe';
import {AlbumService} from '../../services/album.service';

@Component({
    selector: 'typeahead',
    templateUrl: './components/search/search.html',
    styleUrls: ['./components/search/search.css'],
    directives: [FORM_DIRECTIVES, NgFor, NgIf],
    changeDetection: ChangeDetectionStrategy.OnPush,
    pipes: [RxPipe],
    providers: [AlbumService]
})

export class TypeAhead {
    @Output('selected') selected = new EventEmitter();

    clear = new EventEmitter();

    searchText = new Control();

    albums: Observable<any[]>;

    constructor(http: Http, albumService: AlbumService) {
        // get a stream of changes from the tickers input
        this.albums = Observable.from((<EventEmitter>this.searchText.valueChanges).toRx())
            .debounceTime(200)
            .distinctUntilChanged()
            // map that to an observable HTTP request, using the Album
            // service and switch to that
            // observable. That means unsubscribing from any previous HTTP request
            // (cancelling it), and subscribing to the newly returned on here.
            .switchMap((val: string) => albumService.search(val))
            // send an empty array to albums whenever clear emits by
            // merging in a the stream of clear events mapped to an
            // empty array.
            .merge(this.clear.toRx().mapTo([]));
    }


    onSelect(album) {
        this.selected.next(album);
        this.clear.next('');
    }
}

