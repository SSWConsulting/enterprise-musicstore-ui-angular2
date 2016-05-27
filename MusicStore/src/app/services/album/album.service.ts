import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import {Album} from '../../models';
import {API_BASE} from '../../config';

@Injectable()
export class AlbumService {
    albums: Album[] = [];
    album: Album;

    constructor(public _http: Http) {
    }

    getPopularAlbums(): any {
        return this._http.get(API_BASE + `/popular`)
            .map((response: Response) => response.json());
    }

    getAlbum(id: number): any {
        return this._http.get(API_BASE + `/albums/details/${id}`)
            .map((response: Response) => response.json());
    }

    search(val: string): Observable<Album[]> {
        return this._http
            .get(API_BASE + `/albums/${val}`)
            .retry(2)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.of(<Album[]>[]);
    }
}