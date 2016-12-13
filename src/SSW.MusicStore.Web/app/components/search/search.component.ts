import { Component, EventEmitter, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { AlbumService } from '../../services/album/album.service';
import { LoadingService } from '../../services/loading/loading.service';
import { LoadingIndicator } from '../loading/loading.indicator.component';
import { Album } from '../../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mapTo';


@Component({
    selector: 'search',
    templateUrl: 'app/components/search/search.component.html',
    styleUrls: ['app/components/search/search.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AlbumService, LoadingService]
})

export class Search {
    @Output('selected') selected = new EventEmitter();

    clear = new EventEmitter();

    searchText = new FormControl();

    albums: Observable<any>;

    constructor(http: Http, albumService: AlbumService, loadingService: LoadingService) {
        this.albums = this.searchText.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .do(() => {
                console.log("Loading started");
                loadingService.toggleLoadingIndicator(true);
            })
            .switchMap((val: string) => albumService.search(val).defaultIfEmpty([]))
            .do(() => {
                console.log("Loading finished");
                loadingService.toggleLoadingIndicator(false);
            })
            .merge(this.clear.mapTo([]));
    }

    onSelect(album) {
        this.selected.next(album);
        this.clear.next('');
    }
}

