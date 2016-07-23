import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, DatePipe} from '@angular/common';
import {OrderService} from '../../services/order/order.service';
import {Order} from '../../models';

@Component({
    selector: 'orders',
    templateUrl: 'app/components/order/order.component.html',
    styleUrls: ['app/components/order/order.component.css'],
    directives: [CORE_DIRECTIVES],
    pipes: [DatePipe]
})
export class OrderComponent implements OnInit {
    public orders: any[] = [];

    constructor(private _orderService: OrderService) {
    }

    ngOnInit() {
        this.getOrders();
    }

    getOrders() {
       this._orderService.getOrders()
            .subscribe(orders =>
                orders.map((order: Order) => {
                    return {
                        orderId: order.orderId,
                        orderDate: new Date(order.orderDate.toString()),
                        total: order.total
                    };
                }).forEach((order) => {
                    this.orders.push(order);
                })
        );
    }

}
