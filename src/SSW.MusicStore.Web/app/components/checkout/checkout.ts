import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Order} from '../../models';

@Component({
    selector: 'cart',
    templateUrl: './components/checkout/checkout.html',
    styleUrls: ['./components/checkout/checkout.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CheckoutComponent {
    states = ['NSW', 'VIC', 'TAS', 'WA', 'SA', 'NT', 'QLD'];
    public submitted = false;

    model = new Order();

    onSubmit() { this.submitted = true; }
}

