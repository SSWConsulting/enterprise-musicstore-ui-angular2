import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {API_BASE} from '../../config';
import {CartItem, Cart, Album} from '../../models';

@Injectable()
export class CartService {
    constructor(public _http: Http, public authHttp: AuthHttp) {
    }

    getCartItems(): Observable<Cart> {
        return this.authHttp.get(API_BASE + `/cart/current`)
            .map((response: any) => response.json());
    }

    removeItem(item) {
        return this.authHttp.delete(API_BASE + `/cart/remove/${item.cartItemId}`)
            .map((response: any) => response.json());
    }

    addCartItem(album: Album): Observable<Cart> {
        return this.authHttp.post(API_BASE + `/cart/add/${album.albumId}`, '')
            .map((response: any) => response.json());
    }
}