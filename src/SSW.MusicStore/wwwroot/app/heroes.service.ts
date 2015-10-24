import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import * as Rx from 'rx';


@Injectable()
export class HeroesService {
    genres: any;

    constructor(public http: Http) {
        this.http.get('api/genres').map(res => res.json())
            .subscribe(genres => {
                console.log('genre', genres);
                return this.genres = genres
            });
        
    }

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id: number) {
        return Promise.resolve(HEROES)
            .then((heroes: Hero[]) => {
                return heroes.filter((h) => {
                    return h.id === id;
                });
            });
    }
}
