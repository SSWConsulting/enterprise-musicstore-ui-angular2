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
var heroes_service_1 = require('./heroes.service');
var route_config_1 = require('./route.config');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_heroService, _routeParams, _router) {
        this._heroService = _heroService;
        this._routeParams = _routeParams;
        this._router = _router;
    }
    HeroDetailComponent.prototype.onInit = function () {
        if (!this.hero) {
            var id = +this._routeParams.get('id');
        }
    };
    HeroDetailComponent.prototype.gotoHeroes = function () {
        this._router.navigate([("/" + route_config_1.Routes.heroes.as)]);
    };
    HeroDetailComponent = __decorate([
        angular2_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/hero-detail.component.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            inputs: ['hero']
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService, router_1.RouteParams, router_1.Router])
    ], HeroDetailComponent);
    return HeroDetailComponent;
})();
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map