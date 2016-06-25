System.register(['@angular/core', '@angular/common', '../../models', '../../services/checkout/checkout.service', '@angular/router', '../../route.config', 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, common_1, models_1, checkout_service_1, router_1, route_config_1, angular2_jwt_1;
    var CheckoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            },
            function (checkout_service_1_1) {
                checkout_service_1 = checkout_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            CheckoutComponent = (function () {
                function CheckoutComponent(_checkoutService, _router) {
                    this._checkoutService = _checkoutService;
                    this._router = _router;
                    this.states = ['NSW', 'VIC', 'TAS', 'WA', 'SA', 'NT', 'QLD'];
                    this.submitted = false;
                    this.model = new models_1.Order();
                }
                CheckoutComponent.prototype.canActivate = function (route, state) {
                    return angular2_jwt_1.tokenNotExpired();
                };
                CheckoutComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(JSON.stringify(this.model));
                    this._checkoutService.postOrder(this.model).
                        subscribe(function (order) {
                        toastr.success("successfully added order");
                        _this._router.navigate([("/" + route_config_1.Routes.orders.as)]);
                    });
                    this.submitted = true;
                };
                CheckoutComponent = __decorate([
                    core_1.Component({
                        selector: 'checkout',
                        templateUrl: 'app/components/checkout/checkout.component.html',
                        styleUrls: ['app/components/checkout/checkout.component.css'],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.NgForm, common_1.NgFormControl]
                    }), 
                    __metadata('design:paramtypes', [checkout_service_1.CheckoutService, router_1.Router])
                ], CheckoutComponent);
                return CheckoutComponent;
            }());
            exports_1("CheckoutComponent", CheckoutComponent);
        }
    }
});
