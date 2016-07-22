import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, DatePipe} from '@angular/common';
import * as md from '../angular-material/index'
import {Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';

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

  constructor(
    private _orderService: OrderService,
    private _router: Router
  ) {
  }

  ngOnInit() {
  }

  routerOnActivate(
    current: RouteSegment,
    prev?: RouteSegment,
    currTree?: RouteTree,
    prevTree?: RouteTree
  ) {
    if (!tokenNotExpired()) {
      this._router.navigate([`/login`]);
    } else {
      this.getOrders();
    }
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

