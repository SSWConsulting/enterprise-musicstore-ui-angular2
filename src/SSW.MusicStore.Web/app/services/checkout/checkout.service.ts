import {CartItem, CartItems, Order} from '../../models';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {API_BASE} from '../../config';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';


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

    getOrders():Observable<CartItems> {
        return this._http.get(API_BASE + `/orders`)
            .map((response: any) => response.json());
    }

}
