import {Component, OnInit} from 'angular2/core';
import {CartService} from '../../services/cart/cart.service';
import {CartItems} from '../../models';
import {Routes} from '../../route.config';
import {RouteParams, Router, CanActivate} from 'angular2/router';
import {tokenNotExpired} from 'angular2-jwt';


@Component({
    selector: 'cart',
    templateUrl: 'app/components/cart/cart.component.html',
    styleUrls: ['app/components/cart/cart.component.css'],
    directives: []
})
@CanActivate(
    () => tokenNotExpired())
export class CartComponent implements OnInit {
    cart: CartItems;

    constructor(private _cartService: CartService,
        private _routeParams: RouteParams, private _router: Router) {
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
                toastr.error(`${item.album.title} successfully removed from the cart`);
                this.cart = cart;
            });
    }

    gotToCheckout() {
        this._router.navigate([`/${Routes.checkout.as}`]);
    }
}
