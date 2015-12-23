System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../route.config', '../../services/genre/genre.service', '../../config', './LoggedInOutlet'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, route_config_1, genre_service_1, config_1, LoggedInOutlet_1;
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
                AppComponent.prototype.login = function () {
                    var _this = this;
                    this.lock.show({
                        focusInput: false,
                        popup: true
                    }, function (err, profile, token) {
                        if (err)
                            console.log('login error:', err);
                        if (token)
                            localStorage.setItem('jwt', token);
                        if (profile) {
                            localStorage.setItem('user', JSON.stringify(profile));
                            _this.user = profile;
                            _this.router.navigate([("/" + route_config_1.Routes.dashboard.as)]);
                            location.reload();
                        }
                    });
                };
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
                        templateUrl: './components/app/app.html',
                        styleUrls: ['./components/app/app.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, LoggedInOutlet_1.LoggedInRouterOutlet]
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
