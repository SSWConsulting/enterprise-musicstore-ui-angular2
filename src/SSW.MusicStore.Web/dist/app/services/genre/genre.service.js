System.register(['angular2/http', 'angular2/core', '../../config', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, config_1;
    var GenreService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (_1) {}],
        execute: function() {
            GenreService = (function () {
                function GenreService(_http) {
                    this._http = _http;
                    this.genres = [];
                    this.albums = [];
                }
                GenreService.prototype.getGenres = function () {
                    return this._http.get(config_1.API_BASE + "/genres")
                        .map(function (response) { return response.json(); });
                };
                GenreService.prototype.getGenreAlbums = function (name) {
                    return this._http.get(config_1.API_BASE + ("/albums/" + name))
                        .map(function (response) { return response.json(); });
                };
                GenreService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GenreService);
                return GenreService;
            })();
            exports_1("GenreService", GenreService);
        }
    }
});
