import {Component, OnDestroy} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm, NgFormControl} from '@angular/common';
import {Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import * as md from '../angular-material/index'

import {Order} from '../models';
import {STRIPE_PUBLISHABLE_KEY} from '../config';
import { SelectComponent } from './../select/select.component';
import {CheckoutService} from '../services/checkout/checkout.service';
import {CartService} from '../services/cart/cart.service';

declare var StripeCheckout: any;

@Component({
  moduleId: module.id,
  selector: 'ms-checkout',
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],
  directives: [
    SelectComponent,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    NgForm,
    NgFormControl,
    md.MD_CARD_DIRECTIVES,
    md.MdCard,
    md.MdIcon,
    md.MD_INPUT_DIRECTIVES,
    md.MdInput
    ]
})
export class CheckoutComponent {
  states = ['NSW', 'VIC', 'TAS', 'WA', 'SA', 'NT', 'QLD'];
  model = new Order();
  submitted = false;
  stripeHandler: any;

  constructor(private _checkoutService: CheckoutService,
    private _cartService: CartService,
    private _router: Router) {
      this.model.state = '';
  }

  routerOnActivate(
    current: RouteSegment,
    prev?: RouteSegment,
    currTree?: RouteTree,
    prevTree?: RouteTree
  ) {
    if (!tokenNotExpired()) {
      this._router.navigate([`/login`]);
    }
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

  onDestroy() {
    this.stripeHandler.close();
  }
}
