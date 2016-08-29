import {Component, OnDestroy} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm, NgFormControl} from '@angular/common';
import {Router} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';

import {Order} from '../models';
import {STRIPE_PUBLISHABLE_KEY} from '../config';
import {CheckoutService} from '../services/checkout/checkout.service';
import {CartService} from '../services/cart/cart.service';

declare var StripeCheckout: any;

@Component({
  moduleId: module.id,
  selector: 'ms-checkout',
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    NgForm,
    NgFormControl,
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_ICON_DIRECTIVES
  ]
})
export class CheckoutComponent {
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