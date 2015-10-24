import {Genre} from './models';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import * as Rx from 'rx';


@Injectable()
export class GenreService {
    genres: Genre[];
    genre: Genre;
    constructor(public http: Http) {
 
    }

    getGenres() {
       return this.http.get('api/genres').map(res => res.json())
            .subscribe(genres => {
                return this.genres = genres
            });
    }

    getGenre(name: string) {
        return this.http.get(`api/genre/${name}`).map(res => res.json())
            .subscribe(genre => {
                return this.genre = genre
            });
    }
}
