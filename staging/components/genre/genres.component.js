System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../services/genre/genre.service', './genre-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, genre_service_1, genre_detail_component_1;
    var GenresComponent;
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
            function (genre_detail_component_1_1) {
                genre_detail_component_1 = genre_detail_component_1_1;
            }],
        execute: function() {
            GenresComponent = (function () {
                function GenresComponent(_genreService, _router) {
                    this._genreService = _genreService;
                    this._router = _router;
                }
                GenresComponent.prototype.ngOnInit = function () {
                    this.getGenres();
                };
                GenresComponent.prototype.getGenres = function () {
                    var _this = this;
                    this.genres = [];
                    this._genreService.getGenres()
                        .subscribe(function (genres) { return _this.genres = genres; });
                };
                GenresComponent.prototype.goToGenre = function (genre) {
                    this._router.navigate(["/Genres/Genre", { name: genre.name }]);
                };
                GenresComponent = __decorate([
                    core_1.Component({
                        selector: 'genres',
                        template: "\n                          <div class=\"album-section\">\n                            <div class=\"container \">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"list-group\">\n                                            <button *ngFor=\"#genre of genres\" (click)=\"goToGenre(genre)\"\n                                                    type=\"button\" class=\"list-group-item\">\n                                                {{genre.name}}\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-9\">\n                                        <router-outlet></router-outlet>\n                                    </div>\n                                </div>\n                            </div>\n                          </div>\n                        ",
                        styles: ["\n                          .genres {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\n                          .genres li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\n                          .genres li:hover {color: #369; background-color: #EEE; left: .2em;}\n\n                          .genres .badge {\n                            font-size: small;\n                            color: white;\n                            padding: 0.1em 0.7em;\n                            background-color: #369;\n                            line-height: 1em;\n                            position: relative;\n                            left: -1px;\n                            top: -1px;\n                          }\n                          .selected { background-color: #EEE; color: #369; }\n\n                          .list-group {\n                            margin-top: 15px;\n                          }\n                        "],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, genre_detail_component_1.GenreDetailComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/:name', component: genre_detail_component_1.GenreDetailComponent, as: 'Genre' }
                    ]), 
                    __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.Router])
                ], GenresComponent);
                return GenresComponent;
            })();
            exports_1("GenresComponent", GenresComponent);
        }
    }
});
