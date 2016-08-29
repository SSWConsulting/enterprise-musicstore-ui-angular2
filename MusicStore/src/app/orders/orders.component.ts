import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {OrderService} from '../services/order/order.service';
import {Order} from '../models';

@Component({
  selector: 'ms-orders',
  templateUrl: 'orders.component.html',
  styleUrls: ['orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: any[] = [];

  constructor(
    private _orderService: OrderService,
    private _router: Router
  ) {
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
            total: order.total,
            transactionId: order.transactionId
          };
        }).forEach((order) => {
          this.orders.push(order);
        })
      );
  }
}

