import {Genre, Album} from '../models';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class GenreService {
    genres: Genre[] =[];
    albums: Album[] = [];
    constructor(private _http: Http) {
    }

    getGenres() {
        return this._http.get('api/genres').map((response) => response.json()).toPromise()
            .then((genres: Genre[]) => {
                this.genres.push(...genres);
                return this.genres;
            });
    }

    getGenreAlbums(name: string): Promise<Album[]> {
        let promise = this._http.get(`api/genre/${name}`)
            .map((response: any) => response.json()).toPromise()
            .then((albums: Album[]) => {
                this.albums.push(...albums);
                return this.albums;
            });
        return promise;
    }
}
