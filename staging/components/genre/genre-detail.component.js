System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../services/genre/genre.service', '../../route.config', '../album/album-summary.component'], function(exports_1) {
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
                function GenreDetailComponent(_genreService, _routeParams, _router) {
                    this._genreService = _genreService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                GenreDetailComponent.prototype.ngOnInit = function () {
                    if (!this.albums) {
                        this.name = this._routeParams.get('name');
                        this.getGenreAlbums(this.name);
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
                        template: "\n                          <div class=\"album-section\">\n                            <div class=\"container\">\n                                <div class=\"card\">\n                                    <div class=\"card-block\">\n                                        <h2 class=\"title\">{{name}} Albums</h2>\n                                    </div>\n                                </div>\n                                <album-summary (click)=\"goToAlbumDetail(album)\"\n                                               *ngFor=\"#album of albums\"\n                                               [album]=\"album\">\n                                </album-summary>\n                            </div>\n                          </div>\n                        ",
                        directives: [common_1.CORE_DIRECTIVES, album_summary_component_1.AlbumSummary],
                        styles: ["\n                          [class*='col-'] { float: left; }\n\n                          *, *:after, *:before {\n                            -webkit-box-sizing: border-box;\n                            -moz-box-sizing: border-box;\n                            box-sizing: border-box;\n                          }\n\n                          h3 { text-align: center; margin-bottom: 0; }\n\n                          [class*='col-'] { padding-right: 20px; padding-bottom: 20px;}\n                          [class*='col-']:last-of-type { padding-right: 0; }\n\n                          .grid { margin: 0 10em; }\n                          .col-1-4 { width: 25%; }\n                          .module {\n                            padding: 20px;\n                            text-align: center;\n                            color: #eee;\n                            max-height: 120px;\n                            min-width: 120px;\n                            background-color: #1171a3;\n                          }\n\n                          .module:hover { background-color: #52b9e9; cursor: pointer; }\n\n                          .grid-pad { padding: 20px 0 20px 20px; }\n                          .grid-pad > [class*='col-']:last-of-type { padding-right: 20px; }\n\n                          @media (max-width: 600px) {\n                            .module { font-size: 10px; max-height: 75px; }\n                          }\n\n                          @media (max-width: 1024px) {\n                            .grid { margin: 0; }\n                            .module { min-width: 60px; }\n                          }\n\n                          .card {\n                            background-color :white;\n                          }\n                        "],
                        inputs: ['genre']
                    }), 
                    __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.RouteParams, router_1.Router])
                ], GenreDetailComponent);
                return GenreDetailComponent;
            })();
            exports_1("GenreDetailComponent", GenreDetailComponent);
        }
    }
});
