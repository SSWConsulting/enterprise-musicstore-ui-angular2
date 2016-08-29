import {Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Order} from '../models';
import {STRIPE_PUBLISHABLE_KEY} from '../config';
import {CheckoutService} from '../services/checkout/checkout.service';
import {CartService} from '../services/cart/cart.service';

declare var StripeCheckout: any;
declare var toastr: any;

@Component({
  selector: 'ms-checkout',
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent implements OnInit , OnDestroy {
  model = new Order();
  submitted = false;
  stripeHandler: any;

  constructor(private _checkoutService: CheckoutService,
    private _cartService: CartService,
    private _router: Router) {
  }

  ngOnInit() {
    this.stripeHandler = StripeCheckout.configure({
      key: STRIPE_PUBLISHABLE_KEY,
      image: '/assets/img/angular_logo.jpeg',
      locale: 'auto',
      token: (token) => {
        this.model.stripeToken = token.id;
        this.onSubmit();
      }
    });
  }

  purchase() {
    var amount = this._cartService.getCartItems()
      .subscribe(x => {
        // Stripe uses cents instead of a decimal dollar amount.
        var amount = x.cartTotal * 100;

        this.stripeHandler.open({
          name: 'SSW Music Store',
          description: 'Shopping Cart Checkout',
          amount: amount,
          email: this.model.email
        });
      });
  }
  
  onSubmit() {    
    console.log(JSON.stringify(this.model));
    this._checkoutService.postOrder(this.model).
      subscribe((order) => {
        toastr.success(`successfully added order`);
        this._router.navigate([`/orders`]);
      });

    this.submitted = true;
  }

  ngOnDestroy() {
    this.stripeHandler.close();
  }
}