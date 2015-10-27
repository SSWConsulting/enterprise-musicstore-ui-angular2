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
var AlbumService = (function () {
    function AlbumService(_http) {
        this._http = _http;
        this.albums = [];
    }
    AlbumService.prototype.getPopularAlbums = function () {
        var _this = this;
        var promise = this._http.get("/api/popular")
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (albums) {
            (_a = _this.albums).push.apply(_a, albums);
            return _this.albums;
            var _a;
        });
        return promise;
    };
    //TODO: push artist Object in toolbar the Object flatten?
    AlbumService.prototype.getAlbum = function (id) {
        var _this = this;
        var promise = this._http.get("/api/album/" + id)
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (albums) {
            (_a = _this.albums).push.apply(_a, albums);
            return _this.albums[0];
            var _a;
        });
        return promise;
    };
    AlbumService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AlbumService);
    return AlbumService;
})();
exports.AlbumService = AlbumService;
