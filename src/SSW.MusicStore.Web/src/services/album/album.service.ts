import {Album} from '../../models';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';

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

    search(val: string): any {
        return this._http
            .get(API_BASE + `/albums/${val}`)
            .retry(2)
            .map((response: Response) => response.json());
    }
}
