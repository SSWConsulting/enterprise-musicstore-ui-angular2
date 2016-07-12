import {Component, OnInit} from '@angular/core';
import {Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';

import {Cart, CartItem} from '../models';
import {CartService} from '../services/cart/cart.service';

@Component({
  moduleId: module.id,
  selector: 'ms-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_ICON_DIRECTIVES
  ]
})
export class CartComponent implements OnInit {
  cart: Cart = <Cart>{};

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
      });
  }

  gotToCheckout() {
    this._router.navigate([`/checkout`]);
  }
}
