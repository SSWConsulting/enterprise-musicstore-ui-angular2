import {Control, FORM_DIRECTIVES, NgFor, NgIf, AsyncPipe} from '@angular/common';
import {Component, EventEmitter, ChangeDetectionStrategy, Output, } from '@angular/core';
import * as md from './../angular-material/index';
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
  moduleId: module.id,
  selector: 'ms-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [
    md.MD_INPUT_DIRECTIVES,
    md.MdList,
    md.MdListItem,
    md.MD_LIST_DIRECTIVES,
    md.MD_CARD_DIRECTIVES,
    md.MdCard,
    md.MD_PROGRESS_BAR_DIRECTIVES
   ],
  pipes: [AsyncPipe]
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
            this.albums = albums
        })
    }

    onSelect(album) {
        this.selected.next(album);
        this.clear.next('');
    }
}

