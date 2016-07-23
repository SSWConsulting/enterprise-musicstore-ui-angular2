import {Genre, Album} from '../../models';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';

@Injectable()
export class GenreService {
    genres: Genre[] =[];
    albums: Album[] = [];
    constructor(private _http: Http) {
    }

    getGenres(): any {
        return this._http.get(API_BASE + `/genres`)
           .map((response: Response) => response.json());
    }

    getGenreAlbums(name: string): any {
        return this._http.get(API_BASE + `/albums/${name}`)
            .map((response: any) => response.json());
    }
}
