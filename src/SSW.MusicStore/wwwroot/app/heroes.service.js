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
var mock_heroes_1 = require('./mock-heroes');
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var HeroesService = (function () {
    function HeroesService(http) {
        var _this = this;
        this.http = http;
        this.http.get('api/genres').map(function (res) { return res.json(); })
            .subscribe(function (genres) {
            console.log('genre', genres);
            return _this.genres = genres;
        });
    }
    HeroesService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    HeroesService.prototype.getHero = function (id) {
        return Promise.resolve(mock_heroes_1.HEROES)
            .then(function (heroes) {
            return heroes.filter(function (h) {
                return h.id === id;
            });
        });
    };
    HeroesService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroesService);
    return HeroesService;
})();
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes.service.js.map