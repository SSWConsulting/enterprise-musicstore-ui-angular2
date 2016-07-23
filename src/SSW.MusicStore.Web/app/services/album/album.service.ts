import {Album} from '../../models';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {API_BASE} from '../../config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';


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
        var empty: Album[] = [];
        return this._http
            .get(API_BASE + `/albums/${val}`)
            .retryWhen((attempts) => {
                return Observable.range(1, 2).zip(attempts, (i) => i).flatMap((i) => {
                    console.log(`delay retry by ${i} second(s)`);
                    return Observable.timer(i * 1000);
                });
            })
            .map((response: Response) => response.json())
            .catch((err : Error) => {
                console.log(err);
                Raygun.send(err);
                return Observable.of(empty);
            });
    }
}
