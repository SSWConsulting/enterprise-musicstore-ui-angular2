import {CartItem, CartItems, Order} from '../../models';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';


@Injectable()
export class CheckoutService {
    cartItem: CartItem[];
    cartItems: CartItems;

    constructor(public _http: Http, public authHttp: AuthHttp) {
    }

    postOrder(order:Order): any {
        return this.authHttp.post(API_BASE + `/order`, JSON.stringify(order))
            .map((response: Response) => response.json());
    }

    getOrders() :Observable<CartItems> {
        return this.authHttp.get(API_BASE + `/orders`)
            .map((response: any) => response.json());
    }

}
