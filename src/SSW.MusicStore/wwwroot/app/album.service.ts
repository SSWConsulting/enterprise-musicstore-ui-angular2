import {Album} from './models';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import * as Rx from 'rx';


@Injectable()
export class AlbumService {
    albums: Album[] = [];
    album: Album;
    constructor(public _http: Http) {
 
    }

    getPopularAlbums(): Promise<Album[]> {

        let promise = this._http.get('api/popular')
            .map((response: any) => response.json()).toPromise()
            .then((albums: Album[]) => {
                this.albums.push(...albums);
                return this.albums;
            });
        // //TODO: fix catch
        // //.catch(e => this._fetchFailed(e)) // want we want to say
        // // baroque way to ensure promise stays Promise<Hero[]>
        // .then<Character[]>(_ => _, e => this._fetchFailed(e));
            //.then((_: any) => _, (e: any) => this._fetchFailed(e));
        return promise;
    }

    getAlbum(id: number) {
       return this._http.get(`api/album/${id}`).map(res => res.json())
            .subscribe(album => {
                return this.album = album
            });
    }
}
