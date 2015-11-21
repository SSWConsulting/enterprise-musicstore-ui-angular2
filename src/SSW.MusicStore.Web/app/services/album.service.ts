import {Album} from '../models';
import {Http, Response} from 'angular2/http';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';
import {Injectable} from 'angular2/angular2';
import {API_BASE} from '../config';


@Injectable()
export class AlbumService {
    albums: Album[] = [];
    album: Album;

    constructor(public _http: Http) {
    }

    getPopularAlbums(): Observable<Album[]> {
       return this._http.get(API_BASE + `/popular`)
            .map((response: any) => response.json());
    }

    getAlbum(id: number): Observable<Album> {
       return this._http.get(API_BASE + `/albums/details/${id}`)
            .map((response: any) => response.json());
    }

    search(val: string): Observable<any[]> {
        return this._http
            .get(API_BASE + `/albums/${val}`)
            .retry(2)
            .map((res: Response) => <any[]>res.json());
    }
}
