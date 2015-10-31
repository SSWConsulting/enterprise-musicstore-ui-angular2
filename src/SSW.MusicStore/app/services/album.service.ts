import {Album} from '../models';
import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class AlbumService {
    albums: Album[] = [];
    album: Album;
    error: any;
    jwt: string;

    constructor(public _http: Http) {
        this.jwt = localStorage.getItem('jwt');
    }

    getPopularAlbums(): Promise<Album[]> {

        let authHeaders = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.jwt
        });

        let promise = this._http.get(`/api/popular`, {
            headers: authHeaders
        })
            .map((response: any) => response.json()).toPromise()
            .then((albums: Album[]) => {
                this.albums.push(...albums);
                return this.albums;
            });
        return promise;
    }

    getAlbum(id: number) {
        let promise = this._http.get(`/api/albums/details/${id}`)
            .map((response: any) => response.json()).toPromise()
            .then((album: Album) => {
                return album;
            });
        return promise;
    }
}
