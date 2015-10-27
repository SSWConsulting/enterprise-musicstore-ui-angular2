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
            template: "\n      <div class=\"navbar-collapse collapse inverse\" id=\"navbar-header\">\n      \t<div class=\"container-fluid\">\n      \t\t<div class=\"about\">\n      \t\t\t<h4>About</h4>\n      \t\t\t<p class=\"text-muted\">\n      \t\t\t\tThis is the Angular 2 version of the classic ASP.NET MVC Music store rewritten with ASP.NET5, Angular 2, BootStrap 4 and the SSW Enterprise way.\n      \t\t\t</p>\n      \t\t</div>\n      \t\t<div class=\"\">\n      \t\t\t<h4>Contact</h4>\n      \t\t\t<ul class=\"list-unstyled\">\n      \t\t\t\t<li><a href=\"https://github.com/SSWConsulting/angularmusicstore\">SSW Angular2 Music Store &copy; </a></li>\n      \t\t\t</ul>\n      \t\t</div>\n      \t</div>\n      </div>\n      <div class=\"navbar navbar-dark bg-inverse navbar-static-top\">\n      \t<div class=\"container-fluid\">\n      \t\t<button class=\"navbar-toggler pull-left\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-header\">\n      \t\t\t&#9776;\n      \t\t</button>\n      \t\t<a [router-link]=\"['/' + routes.dashboard.as]\" class=\"navbar-brand\">{{title}}</a>\n      \t\t<ul class=\"nav navbar-nav\">\n      \t\t\t<li class=\"nav-item\">\n      \t\t\t\t<div class=\"btn-group\">\n      \t\t\t\t\t<button type=\"button\" class=\"btn menu-dropdown dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      \t\t\t\t\t\tGenre\n      \t\t\t\t\t</button>\n      \t\t\t\t\t<div class=\"dropdown-menu\">\n      \t\t\t\t\t\t<a class=\"dropdown-item\"\n      \t\t\t\t\t\t   (click)=\"goToGenre(genre)\"\n      \t\t\t\t\t\t   *ng-for=\"#genre of genres\">\n      \t\t\t\t\t\t\t{{genre.name}}\n      \t\t\t\t\t\t</a>\n      \t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n      \t\t\t\t\t\t<a class=\"dropdown-item\" [router-link]=\"['/' + routes.genres.as]\">Genre List</a>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t</li>\n      \t\t\t<!--<li class=\"nav-item\">\n      \t\t\t<a class=\"nav-link\" [router-link]=\"['/' + routes.genres.as]\">Cart</a>\n      \t\t</li>-->\n      \t\t\t<li class=\"nav-item pull-right\">\n      \t\t\t\t<a class=\"nav-link\" (click)=\"notImplemented()\">Register</a>\n      \t\t\t</li>\n      \t\t\t<li class=\"nav-item pull-right\">\n      \t\t\t\t<a class=\"nav-link\" (click)=\"notImplemented()\">Login</a>\n      \t\t\t</li>\n      \t\t</ul>\n      \t</div>\n      </div>\n      \t<router-outlet></router-outlet>\n      <footer class=\"text-muted\">\n      \t<div class=\"container\">\n      \t\t<p class=\"pull-right\">\n      \t\t\t<a href=\"#\">Back to top</a>\n      \t\t</p>\n      \t\t<p><a href=\"https://github.com/SSWConsulting/angularmusicstore\">SSW Angular2 Music Store &copy; </a></p>\n      \t</div>\n      </footer>\n    ",
            styles: ["\n\n      .btn-group > .menu-dropdown {\n      \tbackground-color: transparent;\n      }\n    "],
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }),
        router_1.RouteConfig(route_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [genre_service_1.GenreService, router_2.Router])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
