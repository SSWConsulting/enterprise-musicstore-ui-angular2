import {Component, OnInit} from '@angular/core';
import {Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import * as md from '../angular-material/index'

import {CartItems, CartItem} from '../models';
import {CartService} from '../services/cart/cart.service';

@Component({
  moduleId: module.id,
  selector: 'ms-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  directives: [
    md.MD_CARD_DIRECTIVES,
    md.MdCard,
    md.MdIcon,
  ]
})
export class CartComponent implements OnInit {
  cart: CartItems;
  cartItems: CartItem[] = [];
  constructor(private _cartService: CartService,
    private _router: Router) {
  }

  ngOnInit() {
    this.getCart();
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
      this.getCart();
    }
  }

  getCart() {
    this._cartService.getCartItems()
      .subscribe(cart => {
        this.cart = cart;
      });
  }

  removeCartItem(item) {
    this._cartService.removeItem(item)
      .subscribe(cart => {
        toastr.error(`${item.album.title} successfully removed from the cart`);
        this.cart = cart;
        this.cartItems = this.cart.cartItems;
      });
  }

  gotToCheckout() {
    this._router.navigate([`/checkout`]);
  }
}
