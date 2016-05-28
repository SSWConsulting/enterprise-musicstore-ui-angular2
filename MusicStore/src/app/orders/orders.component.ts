import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, DatePipe} from '@angular/common';
import * as md from '../angular-material/index'
import {OrderService} from '../services/order/order.service';
import {Order} from '../models';

@Component({
  moduleId: module.id,
  selector: 'ms-orders',
  templateUrl: 'orders.component.html',
  styleUrls: ['orders.component.css'],
  directives: [
    CORE_DIRECTIVES,
    md.MD_CARD_DIRECTIVES,
    md.MdCard
  ],
  pipes: [DatePipe]
})
export class OrdersComponent implements OnInit {
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

