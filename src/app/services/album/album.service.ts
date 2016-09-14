import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import {Album} from '../../models';
import {API_BASE} from '../../config';

@Injectable()
export class AlbumService {

    constructor(private _http: Http) {
    }

    getPopularAlbums(): Observable<Album[]> {
        return this._http.get(API_BASE + `/popular`)
            .map((response: Response) => response.json());
    }

}
