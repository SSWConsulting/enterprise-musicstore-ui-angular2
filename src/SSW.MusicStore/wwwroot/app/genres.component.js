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
var genre_service_1 = require('./genre.service');
var genre_detail_component_1 = require('./genre-detail.component');
var route_config_1 = require('./route.config');
var GenresComponent = (function () {
    function GenresComponent(_genreService, _router) {
        this._genreService = _genreService;
        this._router = _router;
    }
    GenresComponent.prototype.getGenres = function () {
        var _this = this;
        this.selectedGenre = undefined;
        this.genres = [];
        this._genreService.getGenres()
            .then(function (genres) { return _this.genres = genres; });
        return this.genres;
    };
    GenresComponent.prototype.getSelectedClass = function (genre) {
        return { 'selected': genre === this.selectedGenre };
    };
    GenresComponent.prototype.gotoDetail = function () {
        this._router.navigate([("/" + route_config_1.Routes.genre.as), { id: this.selectedGenre.id }]);
    };
    GenresComponent.prototype.onInit = function () {
        this.genres = this.getGenres();
    };
    GenresComponent.prototype.onSelect = function (genre) { this.selectedGenre = genre; };
    GenresComponent = __decorate([
        angular2_1.Component({
            selector: 'my-genres',
            templateUrl: 'app/genres.component.html',
            styleUrls: ['app/genres.component.css'],
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, genre_detail_component_1.GenreDetailComponent],
        }), 
        __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.Router])
    ], GenresComponent);
    return GenresComponent;
})();
exports.GenresComponent = GenresComponent;
//# sourceMappingURL=genres.component.js.map