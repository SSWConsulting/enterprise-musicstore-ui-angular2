import {Component, Control, EventEmitter, FORM_DIRECTIVES,
NgFor, NgIf, ChangeDetectionStrategy, Output} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';
import {RxPipe} from '../../services/rx-pipe/rx-pipe';
import {AlbumService} from '../../services/album.service';

@Component({
    selector: 'search',
    templateUrl: './components/search/search.html',
    styleUrls: ['./components/search/search.css'],
    directives: [FORM_DIRECTIVES, NgFor, NgIf],
    changeDetection: ChangeDetectionStrategy.OnPush,
    pipes: [RxPipe],
    providers: [AlbumService]
})

export class Search {
    @Output('selected') selected = new EventEmitter();

    clear = new EventEmitter();

    searchText = new Control();

    albums: Observable<any[]>;

    constructor(http: Http, albumService: AlbumService) {
        this.albums = Observable.from(this.searchText.valueChanges)
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap((val: string) => albumService.search(val))
            .merge(this.clear.mapTo([]));
    }


    onSelect(album) {
        this.selected.next(album);
        this.clear.next('');
    }
}

