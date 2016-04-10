System.register(['angular2/core', '../../services/cart/cart.service', '../../route.config', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cart_service_1, route_config_1, router_1;
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
            }],
        execute: function() {
            CartComponent = (function () {
                function CartComponent(_cartService, _routeParams, _router) {
                    this._cartService = _cartService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
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
                        template: "\n                          <div class=\"album-section\">\n                            <div class=\"container\">\n                                <div class=\"row\">\n\n                                    <div class=\"card\" [hidden]=\"cart?.cartItems?.length > 0\">\n                                        <div class=\"card-block\">\n                                            <p>No items in the cart</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"card\" [hidden]=\"cart?.cartItems?.length === 0\">\n                                        <div class=\"card-block\">\n                                            <table class=\"table table-bordered\">\n                                                <tr>\n                                                    <td>Item</td>\n                                                    <td>Amount</td>\n                                                    <td>Price</td>\n                                                    <td></td>\n                                                </tr>\n                                                <tbody>\n                                                    <tr class=\"ms-item\" *ngFor=\"#item of cart?.cartItems\">\n                                                        <td>\n                                                            <img [src]=\"item.album.albumArtUrl\" class=\"img-responsive\" height=\"45\" width=\"45\">\n                                                            <span>{{item.album.title}}</span>\n                                                        </td>\n                                                        <td>{{item.count}}</td>\n                                                        <td>{{item.album.price}}</td>\n                                                        <td style=\"width: 47px;\">\n                                                            <button class=\"btn btn-danger\" (click)=\"removeCartItem(item)\"><i class=\"fa fa-times\"></i></button>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Total</td>\n                                                        <td></td>\n                                                        <td>{{cart?.cartTotal}}</td>\n                                                        <td></td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                            <div class=\"card-block\">\n                                                <button class=\"btn btn-success\" (click)=\"gotToCheckout()\">Checkout</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                          </div>\n                        ",
                        styles: ["\n                          table {\n                            background-color: #fff;\n                          }\n\n                          .card {\n                            background-color: #fff;\n                            border-radius: 0;\n                          }\n\n                          .ms-item .btn {\n                            display: none;\n                          }\n\n                          .ms-item:hover .btn {\n                            display: inline;\n                          }\n\n                          .ms-item:hover {\n                            background-color: #ededed\n                          }\n                        "],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [cart_service_1.CartService, router_1.RouteParams, router_1.Router])
                ], CartComponent);
                return CartComponent;
            })();
            exports_1("CartComponent", CartComponent);
        }
    }
});
