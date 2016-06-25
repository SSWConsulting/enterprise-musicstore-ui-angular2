System.register(['@angular/core', '@angular/common', '../../services/album/album.service', '../../route.config', '../album/album-summary.component', '../search/search.component', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, common_1, album_service_1, route_config_1, album_summary_component_1, search_component_1, router_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (album_service_1_1) {
                album_service_1 = album_service_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (album_summary_component_1_1) {
                album_summary_component_1 = album_summary_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_albumService, _router) {
                    this._albumService = _albumService;
                    this._router = _router;
                    this.albums = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.getPopularAlbums();
                };
                DashboardComponent.prototype.hide = function () {
                    this.searching = true;
                    alert(this.searching);
                };
                DashboardComponent.prototype.goToAlbumDetail = function (album) {
                    this._router.navigate([("/" + route_config_1.Routes.album.as), album.albumId]);
                };
                DashboardComponent.prototype.getPopularAlbums = function () {
                    var _this = this;
                    this._albumService.getPopularAlbums()
                        .subscribe(function (albums) {
                        return _this.albums = albums;
                    });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/components/dashboard/dashboard.component.html',
                        styleUrls: ['app/components/dashboard/dashboard.component.css'],
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, album_summary_component_1.AlbumSummary, search_component_1.Search]
                    }), 
                    __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
