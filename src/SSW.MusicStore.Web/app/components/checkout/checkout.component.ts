import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm, NgFormControl} from '@angular/common';
import {Order} from '../../models';
import {CheckoutService} from '../../services/checkout/checkout.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Routes} from '../../route.config';
import {tokenNotExpired} from 'angular2-jwt';


@Component({
    selector: 'checkout',
    templateUrl: 'app/components/checkout/checkout.component.html',
    styleUrls: ['app/components/checkout/checkout.component.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm, NgFormControl]
})
export class CheckoutComponent {
    states = ['NSW', 'VIC', 'TAS', 'WA', 'SA', 'NT', 'QLD'];
    public submitted = false;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return tokenNotExpired();
    }

    constructor(private _checkoutService: CheckoutService,
        private _router: Router) {
    }

    model = new Order();

    onSubmit() {
        console.log(JSON.stringify(this.model));
        this._checkoutService.postOrder(this.model).
            subscribe((order) => {
                toastr.success(`successfully added order`);
                this._router.navigate([`/${Routes.orders.as}`]);
            });

        this.submitted = true;
    }
}
