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
            templateUrl: './components/genre/genre-detail.component.html',
            directives: [angular2_1.CORE_DIRECTIVES, album_summary_1.AlbumSummary],
            styleUrls: ['./components/genre/genre-detail.component.css'],
            inputs: ['genre']
        }), 
        __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.RouteParams, router_1.Router])
    ], GenreDetailComponent);
    return GenreDetailComponent;
})();
exports.GenreDetailComponent = GenreDetailComponent;
//# sourceMappingURL=genre-detail.component.js.map