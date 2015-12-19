import {CartItem, CartItems, Album} from '../../models';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs';


@Injectable()
export class CartService {
    cartItem: CartItem[];
    cartItems: CartItems;

    constructor(public _http: Http) {
    }

    postCartItems(album:Album): any {
        return this._http.post(API_BASE + `/cart/${album.albumId}`, JSON.stringify(album.albumId))
            .map((response: Response) => response.json());
    }

    getCartItems() { //:Observable<CartItems> {
        return this._http.get(API_BASE + `/cart`)
            .map((response: any) => response.json());
    }

    removeItem(item) {
         return this._http.delete(API_BASE + `/cart/${item.cartItemId}`, item.cartItemId)
            .map((response: any) => response.json());
    }

    addCartItem(album: Album) { //: Observable<CartItems> {
        return this._http.post(API_BASE + `/cart/${album.albumId}`, JSON.stringify(album.albumId))
            .map((response: any) => response.json());
    }
}
