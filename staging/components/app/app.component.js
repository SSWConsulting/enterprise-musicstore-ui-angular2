System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../route.config', '../../services/genre/genre.service', '../../config', './LoggedInOutlet', './../login/login-button.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, route_config_1, genre_service_1, config_1, LoggedInOutlet_1, login_button_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (genre_service_1_1) {
                genre_service_1 = genre_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (LoggedInOutlet_1_1) {
                LoggedInOutlet_1 = LoggedInOutlet_1_1;
            },
            function (login_button_component_1_1) {
                login_button_component_1 = login_button_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(genreService, router) {
                    this.genreService = genreService;
                    this.router = router;
                    this.title = 'SSW Angular 2 Music Store';
                    this.routes = route_config_1.Routes;
                    this.genres = [];
                    this.lock = new Auth0Lock(config_1.AUTH0_CLIENT_ID, config_1.AUTH0_DOMAIN);
                    this.getGenres();
                    this.setUser();
                    toastr.options.positionClass = 'toast-bottom-right';
                }
                AppComponent.prototype.setUser = function () {
                    var savedUser = JSON.parse(localStorage.getItem('user'));
                    if (savedUser) {
                        this.user = savedUser;
                    }
                    ;
                };
                AppComponent.prototype.getGenres = function () {
                    var _this = this;
                    this.genreService.getGenres()
                        .subscribe(function (genres) {
                        _this.genres = genres;
                    });
                };
                AppComponent.prototype.goToGenre = function (genre) {
                    this.router.navigate(["/Genres/Genre", { name: genre.name }]);
                };
                // login() {
                //     this.lock.show({
                //         focusInput: false,
                //         popup: true
                //     }, (err, profile, token) => {
                //         if (err) console.log('login error:', err);
                //         if (token) localStorage.setItem('jwt', token);
                //         if (profile) {
                //             localStorage.setItem('user', JSON.stringify(profile));
                //             this.user = profile;
                //             this.router.navigate([`/${Routes.dashboard.as}`]);
                //             location.reload();
                //         }
                //     });
                // }
                AppComponent.prototype.register = function () {
                    this.lock.showSignup(null, function (err) {
                        console.log(err);
                    });
                };
                AppComponent.prototype.logout = function () {
                    this.user = null;
                    localStorage.removeItem('user');
                    localStorage.removeItem('jwt');
                    this.router.navigate([("/" + route_config_1.Routes.dashboard.as)]);
                    location.reload();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n                          <div class=\"navbar-collapse collapse inverse\" id=\"navbar-header\">\n                            <div class=\"container-fluid header-bg\">\n                                <div class=\"about\">\n                                    <h4>About</h4>\n                                    <p class=\"text-muted\">\n                                        This is the Angular 2 version of the classic ASP.NET MVC Music store rewritten with ASP.NET5, Angular 2, BootStrap 4 and the SSW Enterprise way.\n                                    </p>\n                                </div>\n                                <div class=\"\">\n                                    <h4>Contact</h4>\n                                    <ul class=\"list-unstyled\">\n                                        <li><a href=\"https://github.com/SSWConsulting/angularmusicstore\">SSW Angular2 Music Store</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"navbar navbar-dark bg-inverse navbar-static-top\">\n                            <div class=\"container-fluid\">\n                                <button class=\"navbar-toggler pull-left\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-header\">\n                                    &#9776;\n                                </button>\n                                <a [routerLink]=\"['/' + routes.dashboard.as]\" class=\"navbar-brand hidden-md-down\">\n                                    <img src=\"/app/assets/img/header-logo-with-text-gray.png\"alt=\"ms-logo-menu\" height=\"32\">\n                                </a>\n                                <a  [routerLink]=\"['/' + routes.dashboard.as]\" class=\"navbar-brand hidden-lg-up\">\n                                    <img src=\"/app/assets/img/header-logo.png\" alt=\"ms-logo-menu\" height=\"32\">\n                                </a>\n                                <ul class=\"nav navbar-nav\">\n                                    <li class=\"nav-item\">\n                                        <div class=\"btn-group\">\n                                            <button type=\"button\" class=\"btn menu-dropdown dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                Store\n                                            </button>\n                                            <div class=\"dropdown-menu\">\n                                                <a class=\"dropdown-item\"\n                                                   (click)=\"goToGenre(genre)\"\n                                                   *ngFor=\"#genre of genres\">\n                                                    {{genre.name}}\n                                                </a>\n                                                <div class=\"dropdown-divider\"></div>\n                                                <a class=\"dropdown-item\" [routerLink]=\"['/Genres/Genre', {name:''}]\">Genre List</a>\n                                            </div>\n                                        </div>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                    <a class=\"nav-link\" [hidden]=\"!user\" [routerLink]=\"['/' + routes.cart.as]\">Cart</a>\n                                    </li>\n                                    <li class=\"nav-item pull-right\" [hidden]=\"user\">\n                                        <a class=\"nav-link\" (click)=\"register()\">Register</a>\n                                    </li>\n                                      <login-button class=\"pull-right\" [hidden]=\"user\"></login-button>\n                                    <li class=\"nav-item pull-right\" [hidden]=\"!user\">\n                                        <a class=\"nav-link\"  (click)=\"logout()\">Logout</a>\n                                    </li>\n                                    <li class=\"nav-item pull-right hidden-md-down\" [hidden]=\"!user\">\n                                        <a class=\"nav-link\" >{{user?.email}}</a>\n                                    </li>\n                                    <li class=\"nav-item pull-right\"  [hidden]=\"!user\">\n                                        <img [src]=\"user?.picture\" class=\"img-responsive\" height=\"35\" width=\"35\">\n                                    </li>\n                                </ul>\n                            </div>\n                          </div>\n                          <div class=\"container-fluid ms-page-wrap\">\n                            <router-outlet></router-outlet>\n                          </div>\n                          <footer class=\"text-muted ms-footer\">\n                            <div class=\"container\">\n                                <p><a href=\"https://github.com/SSWConsulting/angularmusicstore\">SSW Angular2 Music Store</a></p>\n                            </div>\n                          </footer>\n                        ",
                        styles: ["\n\n                          .btn-group > .menu-dropdown {\n                            background-color: transparent;\n                          }\n\n                          .router-link {\n                            padding: 5px;\n                            text-decoration: none;\n                          }\n\n                          .router-link:visited, .router-link:link {\n                            color: #444;\n                          }\n\n                          .router-link:hover {\n                            color: white;\n                            text-decoration: none;\n                          }\n\n                          .router-link.router-link-active {\n                            color: white;\n                          }\n\n\n                          .header-bg {\n                            background-color: #373a3c;\n                          }\n\n                          .navbar-brand {\n                            margin:0;\n                            padding:0\n                          }\n                        "],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, LoggedInOutlet_1.LoggedInRouterOutlet, login_button_component_1.LoginButtonComponent]
                    }),
                    router_1.RouteConfig(route_config_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
