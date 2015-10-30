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
var router_2 = require('angular2/router');
var route_config_1 = require('../../route.config');
var genre_service_1 = require('../../services/genre.service');
var AppComponent = (function () {
    function AppComponent(_genreService, _router) {
        this._genreService = _genreService;
        this._router = _router;
        this.title = 'SSW Angular 2 Music Store';
        this.routes = route_config_1.Routes;
        this.getGenres();
    }
    AppComponent.prototype.getGenres = function () {
        var _this = this;
        this.genres = [];
        this._genreService.getGenres()
            .then(function (genres) { return _this.genres = genres; });
        return this.genres;
    };
    AppComponent.prototype.goToGenre = function (genre) {
        this._router.navigate([("/" + route_config_1.Routes.genre.as), { name: genre.name }]);
    };
    AppComponent.prototype.notImplemented = function () {
        alert('not implemented yet');
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            templateUrl: './components/app/app.html',
            styleUrls: ['./components/app/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }),
        router_1.RouteConfig(route_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [genre_service_1.GenreService, router_2.Router])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map