import {Order} from '../../models';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs';


@Injectable()
export class OrderService {
    order: Order;

    constructor(public _http: Http) {
    }

    getOrders() { //: Observable<Order[]> {
        return this._http.get(API_BASE + `/order`)
            .map((response: Response) => response.json());
    }
}
