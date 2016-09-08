import {Control} from '@angular/common';
import {Component, EventEmitter, ChangeDetectionStrategy, Output, } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';

import {Album} from '../models';
import {AlbumService} from '../services/album/album.service';

@Component({
  selector: 'ms-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

export class SearchComponent {
    @Output('selected') selected = new EventEmitter();

    albums: Album[] = [];
    isLoading: boolean = false;
    clear = new EventEmitter();
    searchText = new Control();
    albumsStream: Observable<any>;

    constructor(http: Http, albumService: AlbumService) {
       this.albumsStream = this.searchText.valueChanges
           .do((searchText: string) => this.isLoading = true)
           .debounceTime(500)
           .distinctUntilChanged()
           .switchMap((searchText: string) => searchText.length > 0
            ?  albumService.search(searchText)
            : Observable.of([]))
           .do(() => this.isLoading = false)
            .merge(this.clear.mapTo([]));

       this.albumsStream
           .subscribe((albums) => {
               this.albums = albums;
           });
    }

    onSelect(album) {
        this.selected.next(album);
        this.clear.next('');
    }
}

