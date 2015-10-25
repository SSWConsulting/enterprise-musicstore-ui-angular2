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
var app = (function () {
    function app() {
    }
    app = __decorate([
        angular2_1.Component({
            selector: 'ms-app',
            templateUrl: 'app/app.html',
            //         `
            //    <h1>{{title}}</h1>
            //    <a [router-link]="['/' + routes.dashboard.as]" class="router-link">Popular Albums</a>
            //    <a [router-link]="['/' + routes.genres.as]" class="router-link">Genres</a>
            //    <router-outlet></router-outlet>
            //<footer class="text-muted">
            //	<div class="container">
            //		<p class="pull-right">
            //			<a href="#">Back to top</a>
            //		</p>
            //		<p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            //		<p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
            //	</div>
            //</footer>
            //  `,
            //    styles: [`
            //    .router-link {padding: 5px;text-decoration: none;}
            //    .router-link:visited, .router-link:link {color: #444;}
            //    .router-link:hover {color: white; background-color: #1171a3; text-decoration: none;}
            //    .router-link.router-link-active {color: white; background-color: #52b9e9; text-decoration: none;}
            //  `],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], app);
    return app;
})();
exports.app = app;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'SSW Angular 2 Music Store';
        this.routes = route_config_1.Routes;
    }
    AppComponent = __decorate([
        router_1.RouteConfig(route_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map