import {Album} from '../../models';
import {Http, Response} from 'angular2/http';
import {Injectable, Observable} from 'angular2/angular2';
import {API_BASE} from '../../config';

@Injectable()
export class AlbumService {
    albums: Album[] = [];
    album: Album;

    constructor(public _http: Http) {
    }

    getPopularAlbums(): Observable<Album[]> {
       return this._http.get(API_BASE + `/popular`)
            .map((response: Response) => response.json());
    }

    getAlbum(id: number): Observable<Album> {
       return this._http.get(API_BASE + `/albums/details/${id}`)
           .map((response: Response) => response.json());
    }

    search(val: string): Observable<Album[]> {
        return this._http
            .get(API_BASE + `/albums/${val}`)
            .retry(2)
            .map((response: Response) => response.json());
    }
}
