import {Component, OnInit} from '@angular/core';
import {Cart, CartItem} from '../models';
import {CartService} from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = <Cart>{};

  constructor(private _cartService: CartService) {
  }

  ngOnInit() {
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
        this.cart = cart;
      });
  }
}