import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {CartItems} from '../../models';
import {Routes} from '../../route.config';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';


@Component({
    selector: 'cart',
    templateUrl: 'app/components/cart/cart.component.html',
    styleUrls: ['app/components/cart/cart.component.css'],
    directives: []
})

export class CartComponent implements OnInit, CanActivate {
    cart: CartItems;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return tokenNotExpired();
    }

    constructor(private _cartService: CartService,
        private _router: Router) {
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
