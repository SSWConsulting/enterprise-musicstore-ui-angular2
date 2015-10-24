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
var route_config_1 = require('./route.config');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.routes = route_config_1.Routes;
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <a [router-link]=\"['/' + routes.dashboard.as]\" class=\"router-link\">Dashboard</a>\n    <a [router-link]=\"['/' + routes.heroes.as]\" class=\"router-link\">Heroes</a>\n    <router-outlet></router-outlet>\n  ",
            styles: ["\n    .router-link {padding: 5px;text-decoration: none;}\n    .router-link:visited, .router-link:link {color: #444;}\n    .router-link:hover {color: white; background-color: #1171a3; text-decoration: none;}\n    .router-link.router-link-active {color: white; background-color: #52b9e9; text-decoration: none;}\n  "],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig(route_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map