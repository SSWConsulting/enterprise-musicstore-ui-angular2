import {CartItem, CartItems} from '../models';
import {Http, Headers,} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
//import {API_BASE} from '../config';
//import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';

@Injectable()
export class CartService {
    cartItem: CartItem[];
    cartItems: CartItems;
    authHeaders: any;
    error: any;
    jwt: string;

    constructor(public _http: Http) {
        this.jwt = localStorage.getItem('jwt');
        this.authHeaders = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.jwt
        });
    }

    //postCartItems(cartItems): any {
    //   return this._http.post(API_BASE + `/cart`, cartItems,
    //       headers: this.authHeaders)
    //       .map((response: Response) => response.json());
    //}

    //getCartItems() {
    //    return this._http.get(API_BASE + `/cart`, headers: this.authHeaders)
    //        .map((response: any) => response.json()
    //}
}
