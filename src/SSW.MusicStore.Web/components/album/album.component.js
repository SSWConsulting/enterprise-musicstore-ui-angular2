System.register(['@angular/core', '@angular/common', '@angular/router', '../../route.config', '../../services/album/album.service', '../../services/cart/cart.service', './album-template.component'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, route_config_1, album_service_1, cart_service_1, album_template_component_1;
    var AlbumDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (album_service_1_1) {
                album_service_1 = album_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (album_template_component_1_1) {
                album_template_component_1 = album_template_component_1_1;
            }],
        execute: function() {
            AlbumDetailComponent = (function () {
                function AlbumDetailComponent(_albumService, _cartService, _route, _router) {
                    this._albumService = _albumService;
                    this._cartService = _cartService;
                    this._route = _route;
                    this._router = _router;
                    this.setUser();
                }
                AlbumDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.album) {
                        this.subscription = this._route
                            .params
                            .subscribe(function (params) {
                            var id = +params['id'];
                            _this.id = parseInt(id.toString());
                            _this.getAlbum(_this.id);
                        });
                    }
                };
                AlbumDetailComponent.prototype.getAlbum = function (id) {
                    var _this = this;
                    this._albumService.getAlbum(id)
                        .subscribe(function (album) {
                        album.created = new Date(album.created.toString());
                        _this.album = album;
                    }, function (e) { return toastr.error("" + e); });
                };
                AlbumDetailComponent.prototype.setUser = function () {
                    var savedUser = JSON.parse(localStorage.getItem('user'));
                    if (savedUser) {
                        this.user = savedUser;
                    }
                    ;
                };
                AlbumDetailComponent.prototype.addToCart = function (album) {
                    var _this = this;
                    this._cartService.addCartItem(album)
                        .subscribe(function (cart) {
                        toastr.success(album.title + " successfully added to cart");
                        _this._router.navigate([("/" + route_config_1.Routes.cart.as)]);
                    });
                };
                AlbumDetailComponent.prototype.goToGenre = function (album) {
                    this._router.navigate([("/" + route_config_1.Routes.genres.as)]);
                };
                AlbumDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'album-detail',
                        templateUrl: 'app/components/album/album.component.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, album_template_component_1.AlbumTemplate]
                    }), 
                    __metadata('design:paramtypes', [album_service_1.AlbumService, cart_service_1.CartService, router_1.ActivatedRoute, router_1.Router])
                ], AlbumDetailComponent);
                return AlbumDetailComponent;
            }());
            exports_1("AlbumDetailComponent", AlbumDetailComponent);
        }
    }
});
