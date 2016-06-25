System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/genre/genre.service', '../../route.config', '../album/album-summary.component'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, genre_service_1, route_config_1, album_summary_component_1;
    var GenreDetailComponent;
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
            function (genre_service_1_1) {
                genre_service_1 = genre_service_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (album_summary_component_1_1) {
                album_summary_component_1 = album_summary_component_1_1;
            }],
        execute: function() {
            GenreDetailComponent = (function () {
                function GenreDetailComponent(_genreService, _route, _router) {
                    this._genreService = _genreService;
                    this._route = _route;
                    this._router = _router;
                }
                GenreDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.albums) {
                        this.subscription = this._route
                            .params
                            .subscribe(function (params) {
                            _this.name = (+params['name']).toString();
                            _this.getGenreAlbums(_this.name);
                        });
                    }
                };
                GenreDetailComponent.prototype.getGenreAlbums = function (name) {
                    var _this = this;
                    this._genreService.getGenreAlbums(name)
                        .subscribe(function (albums) {
                        return _this.albums = albums;
                    });
                };
                GenreDetailComponent.prototype.goToAlbumDetail = function (album) {
                    this._router.navigate([("/" + route_config_1.Routes.album.as), { id: album.albumId }]);
                };
                GenreDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'genre-detail',
                        templateUrl: 'app/components/genre/genre-detail.component.html',
                        directives: [common_1.CORE_DIRECTIVES, album_summary_component_1.AlbumSummary],
                        styleUrls: ['app/components/genre/genre-detail.component.css'],
                        inputs: ['genre']
                    }), 
                    __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.ActivatedRoute, router_1.Router])
                ], GenreDetailComponent);
                return GenreDetailComponent;
            }());
            exports_1("GenreDetailComponent", GenreDetailComponent);
        }
    }
});
