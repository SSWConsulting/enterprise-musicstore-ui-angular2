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
var hero_detail_component_1 = require('./hero-detail.component');
var route_config_1 = require('./route.config');
var HeroesComponent = (function () {
    function HeroesComponent(_heroService, _router) {
        this._heroService = _heroService;
        this._router = _router;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.selectedHero = undefined;
        this.heroes = [];
        this._heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
        return this.heroes;
    };
    HeroesComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this._router.navigate([("/" + route_config_1.Routes.detail.as), { id: this.selectedHero.id }]);
    };
    HeroesComponent.prototype.onInit = function () {
        this.heroes = this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesComponent = __decorate([
        angular2_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css'],
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, hero_detail_component_1.HeroDetailComponent],
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
})();
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map