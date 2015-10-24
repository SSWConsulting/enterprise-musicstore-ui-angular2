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
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var GenreService = (function () {
    function GenreService(http) {
        this.http = http;
    }
    GenreService.prototype.getGenres = function () {
        var _this = this;
        return this.http.get('api/genres').map(function (res) { return res.json(); })
            .subscribe(function (genres) {
            return _this.genres = genres;
        });
    };
    GenreService.prototype.getGenre = function (name) {
        var _this = this;
        return this.http.get("api/genre/" + name).map(function (res) { return res.json(); })
            .subscribe(function (genre) {
            return _this.genre = genre;
        });
    };
    GenreService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GenreService);
    return GenreService;
})();
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map