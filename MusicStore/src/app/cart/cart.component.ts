import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {Observable} from 'rxjs/Observable';

import {Cart, CartItem} from '../models';
import {CartService} from '../services/cart/cart.service';

declare var toastr: any;

@Component({
  selector: 'ms-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart = <Cart>{};

  constructor(private _cartService: CartService,
    private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    // this._router.events.subscribe((event: Event) => {
    //         if (event instanceof NavigationStart) {
    //             if (!tokenNotExpired()) {
    //               this._router.navigate([`/login`]);
    //             } else {
    //               this.getCart();
    //             }
    //         }
    //     });
    this.getCart();
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
