System.register(['@angular/http', '@angular/core', '../../config', 'rxjs/add/operator/map', 'rxjs/add/operator/retry'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var AlbumService;
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
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AlbumService = (function () {
                function AlbumService(_http) {
                    this._http = _http;
                    this.albums = [];
                }
                AlbumService.prototype.getPopularAlbums = function () {
                    return this._http.get(config_1.API_BASE + "/popular")
                        .map(function (response) { return response.json(); });
                };
                AlbumService.prototype.getAlbum = function (id) {
                    return this._http.get(config_1.API_BASE + ("/albums/details/" + id))
                        .map(function (response) { return response.json(); });
                };
                AlbumService.prototype.search = function (val) {
                    return this._http
                        .get(config_1.API_BASE + ("/albums/" + val))
                        .retry(2)
                        .map(function (response) { return response.json(); });
                };
                AlbumService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AlbumService);
                return AlbumService;
            }());
            exports_1("AlbumService", AlbumService);
        }
    }
});
