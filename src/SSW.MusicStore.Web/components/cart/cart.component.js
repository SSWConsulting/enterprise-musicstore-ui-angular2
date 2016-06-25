System.register(['@angular/core', '../../services/cart/cart.service', '../../route.config', '@angular/router', 'angular2-jwt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cart_service_1, route_config_1, router_1, angular2_jwt_1;
    var CartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            CartComponent = (function () {
                function CartComponent(_cartService, _router) {
                    this._cartService = _cartService;
                    this._router = _router;
                }
                CartComponent.prototype.canActivate = function (route, state) {
                    return angular2_jwt_1.tokenNotExpired();
                };
                CartComponent.prototype.ngOnInit = function () {
                    this.getCart();
                };
                CartComponent.prototype.getCart = function () {
                    var _this = this;
                    this._cartService.getCartItems()
                        .subscribe(function (cart) {
                        _this.cart = cart;
                    });
                };
                CartComponent.prototype.removeCartItem = function (item) {
                    var _this = this;
                    this._cartService.removeItem(item)
                        .subscribe(function (cart) {
                        toastr.error(item.album.title + " successfully removed from the cart");
                        _this.cart = cart;
                    });
                };
                CartComponent.prototype.gotToCheckout = function () {
                    this._router.navigate([("/" + route_config_1.Routes.checkout.as)]);
                };
                CartComponent = __decorate([
                    core_1.Component({
                        selector: 'cart',
                        templateUrl: 'app/components/cart/cart.component.html',
                        styleUrls: ['app/components/cart/cart.component.css'],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [cart_service_1.CartService, router_1.Router])
                ], CartComponent);
                return CartComponent;
            }());
            exports_1("CartComponent", CartComponent);
        }
    }
});
