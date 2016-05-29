import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm, NgFormControl} from '@angular/common';
import {Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import * as md from '../angular-material/index'

import {Order} from '../models';
import { SelectComponent } from './../select/select.component';
import {CheckoutService} from '../services/checkout/checkout.service';

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

  constructor(private _checkoutService: CheckoutService,
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
  
  onSubmit() {
    console.log(JSON.stringify(this.model));
    this._checkoutService.postOrder(this.model).
      subscribe((order) => {
        toastr.success(`successfully added order`);
        this._router.navigate([`/orders`]);
      });

    this.submitted = true;
  }
}
