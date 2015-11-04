import {Album} from '../models';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {API_BASE} from '../config';

@Injectable()
export class AlbumService {
    albums: Album[] = [];
    album: Album;

    constructor(public _http: Http) {
    }

    getPopularAlbums(): Promise<Album[]> {


        let promise = this._http.get(API_BASE + `/popular`)
            .map((response: any) => response.json()).toPromise()
            .then((albums: Album[]) => {
                this.albums.push(...albums);
                return this.albums;
            });
        return promise;
    }

    getAlbum(id: number) {
        let promise = this._http.get(API_BASE + `/albums/details/${id}`)
            .map((response: any) => response.json()).toPromise()
            .then((album: Album) => {
                return album;
            });
        return promise;
    }
}
