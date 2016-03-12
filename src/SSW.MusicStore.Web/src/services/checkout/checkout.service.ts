import {CartItem, CartItems, Order} from '../../models';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs';


@Injectable()
export class CheckoutService {
    cartItem: CartItem[];
    cartItems: CartItems;

    constructor(public _http: Http) {
    }

    postOrder(order:Order): any {
        return this._http.post(API_BASE + `/order`, JSON.stringify(order))
            .map((response: Response) => response.json());
    }

    getOrders() { //:Observable<CartItems> {
        return this._http.get(API_BASE + `/orders`)
            .map((response: any) => response.json());
    }

}
