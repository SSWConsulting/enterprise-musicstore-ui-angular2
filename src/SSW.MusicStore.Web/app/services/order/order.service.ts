import {Order} from '../../models';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {API_BASE} from '../../config';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';


@Injectable()
export class OrderService {
    order: Order;

    constructor(public _http: Http) {
    }

    getOrders(): Observable<Order[]> {
        return this._http.get(API_BASE + `/order`)
            .map((response: Response) => response.json());
    }

}
