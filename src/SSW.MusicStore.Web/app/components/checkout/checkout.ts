import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Order} from '../../models';
import {CheckoutService} from '../../services/checkout/checkout.service';
import {RouteParams, Router} from 'angular2/router';
import {Routes} from '../../route.config';

@Component({
    selector: 'checkout',
    templateUrl: './components/checkout/checkout.html',
    styleUrls: ['./components/checkout/checkout.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CheckoutComponent {
    states = ['NSW', 'VIC', 'TAS', 'WA', 'SA', 'NT', 'QLD'];
    public submitted = false;

    constructor(private _checkoutService: CheckoutService,
        private _routeParams: RouteParams, private _router: Router) {
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

