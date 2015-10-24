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
var DashboardComponent = (function () {
    function DashboardComponent(_heroService, _router) {
        //constructor(private _heroService: HeroesService, private _router: Router, private http:Http) { 
        this._heroService = _heroService;
        this._router = _router;
        //this.http.get('api/genres').map(res => res.json())
        //    .subscribe(genres => this.genres = genres);
        //console.log(this.genres);
    }
    DashboardComponent.prototype.onInit = function () {
        this.heroes = this.getHeroes();
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        this._router.navigate([("/" + route_config_1.Routes.detail.as), { id: hero.id }]);
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroes = [];
        this._heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
        return this.heroes;
    };
    DashboardComponent = __decorate([
        angular2_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css'],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map