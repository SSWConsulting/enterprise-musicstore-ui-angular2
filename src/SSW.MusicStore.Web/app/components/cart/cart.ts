import {Component, OnInit} from 'angular2/angular2';
import {CartService} from '../../services/cart/cart.service';
import {CartItems} from '../../models';
import {Routes} from '../../route.config';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'cart',
    templateUrl: './components/cart/cart.html',
    styleUrls: ['./components/cart/cart.css'],
    directives: []
})
export class CartComponent implements OnInit {
    cart: CartItems;

    constructor(private _cartService: CartService,
        private _routeParams: RouteParams, private _router: Router) {
    }

    onInit() {
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
        this._router.navigate([`/${Routes.checkout.as}`]);
    }
}
