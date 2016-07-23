import {Order} from '../../models';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {API_BASE} from '../../config';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class OrderService {
    order: Order;

    constructor(public _http: Http, public authHttp: AuthHttp) {
    }

    getOrders() : Observable<Order[]> {
        return this.authHttp.get(API_BASE + `/order`)
            .map((response: Response) => response.json());
    }
}
