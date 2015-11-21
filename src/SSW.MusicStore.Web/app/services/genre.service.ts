import {Genre, Album} from '../models';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {API_BASE} from '../config';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';

@Injectable()
export class GenreService {
    genres: Genre[] =[];
    albums: Album[] = [];
    constructor(private _http: Http) {
    }

    getGenres(): Observable<Genre[]> {
        return this._http.get(API_BASE + `/genres`).map((response:Response) => response.json());
    }

    getGenreAlbums(name: string): Observable<Album[]> {
        return this._http.get(API_BASE + `/albums/${name}`)
            .map((response: any) => response.json());
    }
}
