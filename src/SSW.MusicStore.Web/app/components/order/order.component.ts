import {Component, CORE_DIRECTIVES, OnInit, DatePipe} from 'angular2/angular2';
import {OrderService} from '../../services/order/order.service';
import {Order} from '../../models';

@Component({
    selector: 'orders',
    templateUrl: './components/order/order.component.html',
    styleUrls: ['./components/order/order.component.css'],
    directives: [CORE_DIRECTIVES],
    pipes: [DatePipe]
})
export class OrderComponent implements OnInit {
    public orders: any[] = [];

    constructor(private _orderService: OrderService) {
    }

    onInit() {
        this.getOrders();
    }

    getOrders() {
       this._orderService.getOrders()
            .subscribe(order => order
                .map((order: Order) => {
                    return {
                        orderId: order.orderId,
                        orderDate: new Date(order.orderDate.toString()),
                        total: order.total
                    }
                }).forEach((order) => {
                   this.orders.push(order)
                })
        );
    }

}
