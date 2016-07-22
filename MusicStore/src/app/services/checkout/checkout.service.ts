import {CartItem, Cart, Order} from '../../models';
import {Http, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';


@Injectable()
export class CheckoutService {
    constructor(public _http: Http, public authHttp: AuthHttp) {
    }

    postOrder(order: Order): any {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this.authHttp.post(API_BASE + `/order/create`, JSON.stringify(order), {
            headers: headers
        })
            .map((response: Response) => response.json());
    }

    getOrders(): Observable<Cart> {
        return this.authHttp.get(API_BASE + `/order/all`)
            .map((response: any) => response.json());
    }
}
