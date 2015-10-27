var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var genre_service_1 = require('../../services/genre.service');
var route_config_1 = require('../../route.config');
var album_summary_1 = require('../album/album-summary');
var GenreDetailComponent = (function () {
    function GenreDetailComponent(_genreService, _routeParams, _router) {
        this._genreService = _genreService;
        this._routeParams = _routeParams;
        this._router = _router;
    }
    GenreDetailComponent.prototype.onInit = function () {
        if (!this.albums) {
            this.name = this._routeParams.get('name');
            return this.albums = this.getGenreAlbums(this.name);
        }
    };
    GenreDetailComponent.prototype.getGenreAlbums = function (name) {
        var _this = this;
        this._genreService.getGenreAlbums(name)
            .then(function (albums) {
            return _this.albums = albums;
        });
        return this.albums;
    };
    GenreDetailComponent.prototype.goToAlbumDetail = function (album) {
        this._router.navigate([("/" + route_config_1.Routes.album.as), { id: album.albumId }]);
    };
    GenreDetailComponent = __decorate([
        angular2_1.Component({
            selector: 'genre-detail',
            template: "\n    <div class=\"album-section\">\n    \t<div class=\"container\">\n    \t\t<h2 class=\"title\">{{name}} Albums</h2>\n    \t\t<album-summary (click)=\"goToAlbumDetail(album)\"\n    \t\t\t\t\t\t\t *ng-for=\"#album of albums\"\n    \t\t\t\t\t\t\t [album]=\"album\">\n    \t\t</album-summary>\n    \t</div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, album_summary_1.AlbumSummary],
            styles: ["\n    [class*='col-'] { float: left; }\n\n    *, *:after, *:before {\n    \t-webkit-box-sizing: border-box;\n    \t-moz-box-sizing: border-box;\n    \tbox-sizing: border-box;\n    }\n\n    h3 { text-align: center; margin-bottom: 0; }\n\n    [class*='col-'] { padding-right: 20px; padding-bottom: 20px;}\n    [class*='col-']:last-of-type { padding-right: 0; }\n\n    .grid { margin: 0 10em; }\n    .col-1-4 { width: 25%; }\n    .module {\n    \tpadding: 20px;\n    \ttext-align: center;\n    \tcolor: #eee;\n    \tmax-height: 120px;\n    \tmin-width: 120px;\n    \tbackground-color: #1171a3;\n    }\n\n    .module:hover { background-color: #52b9e9; cursor: pointer; }\n\n    .grid-pad { padding: 20px 0 20px 20px; }\n    .grid-pad > [class*='col-']:last-of-type { padding-right: 20px; }\n\n    @media (max-width: 600px) {\n    \t.module { font-size: 10px; max-height: 75px; }\n    }\n\n    @media (max-width: 1024px) {\n    \t.grid { margin: 0; }\n    \t.module { min-width: 60px; }\n    }\n  "],
            inputs: ['genre']
        }), 
        __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.RouteParams, router_1.Router])
    ], GenreDetailComponent);
    return GenreDetailComponent;
})();
exports.GenreDetailComponent = GenreDetailComponent;
