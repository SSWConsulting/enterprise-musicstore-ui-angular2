import {Component, EventEmitter, Output } from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from 'rxjs';
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
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

export class SearchComponent {
    @Output('selected') selected = new EventEmitter();

    searchStream = new Subject<string>();
    albums: Album[] = [];
    isLoading: boolean = false;
    searchText: string;

    constructor(http: Http, albumService: AlbumService) {
      this.searchStream
        .do((searchText: string) => this.isLoading = true)
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap((searchText: string) => {
          return searchText.length > 0
            ? albumService.search(searchText)
            : Observable.of(<Album[]>[]);
        })
        .subscribe((x: Album[]) => {
          this.isLoading = false;
          this.albums = x;
        });
    }

    searchTextChange(value: string) {
      this.searchStream.next(value);
    }  

    onSelect(album) {
      this.selected.next(album);
    }
}