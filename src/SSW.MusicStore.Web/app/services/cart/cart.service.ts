import {CartItem, CartItems, Album} from '../../models';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';


@Injectable()
export class CartService {
    cartItem: CartItem[];
    cartItems: CartItems;

    constructor(public _http: Http, public authHttp: AuthHttp) {
    }

    getCartItems(): Observable<CartItems> {
        return this.authHttp.get(API_BASE + `/cart/items`)
            .map((response: any) => response.json());
    }

    removeItem(item) {
        return this.authHttp.delete(API_BASE + `/cart/remove/${item.cartItemId}`, item.cartItemId)
            .map((response: any) => response.json());
    }

    addCartItem(album: Album): Observable<CartItems> {
        return this.authHttp.post(API_BASE + `/cart/add/${album.albumId}`, JSON.stringify(album.albumId))
            .map((response: any) => response.json());
    }
}
