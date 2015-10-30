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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FsYnVtLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQWxidW1TZXJ2aWNlIiwiQWxidW1TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQWxidW1TZXJ2aWNlLmdldFBvcHVsYXJBbGJ1bXMiLCJBbGJ1bVNlcnZpY2UuZ2V0QWxidW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLHlCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBRTdDO0lBTUlBLHNCQUFtQkEsS0FBV0E7UUFBWEMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBTUE7UUFKOUJBLFdBQU1BLEdBQVlBLEVBQUVBLENBQUNBO0lBS3JCQSxDQUFDQTtJQUVERCx1Q0FBZ0JBLEdBQWhCQTtRQUFBRSxpQkFTQ0E7UUFQR0EsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsY0FBY0EsQ0FBQ0E7YUFDdkNBLEdBQUdBLENBQUNBLFVBQUNBLFFBQWFBLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQ25EQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFlQTtZQUNsQkEsTUFBQUEsS0FBSUEsQ0FBQ0EsTUFBTUEsRUFBQ0EsSUFBSUEsV0FBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBOztRQUN2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDbkJBLENBQUNBO0lBRURGLHlEQUF5REE7SUFDekRBLCtCQUFRQSxHQUFSQSxVQUFTQSxFQUFVQTtRQUFuQkcsaUJBUUNBO1FBUEdBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLGdCQUFjQSxFQUFJQSxDQUFDQTthQUMzQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsUUFBYUEsSUFBS0EsT0FBQUEsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUE7YUFDbkRBLElBQUlBLENBQUNBLFVBQUNBLE1BQWVBO1lBQ2xCQSxNQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxFQUFDQSxJQUFJQSxXQUFJQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUM1QkEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7O1FBQzFCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUE3QkxIO1FBQUNBLHFCQUFVQSxFQUFFQTs7cUJBOEJaQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0E5QkEsQUE4QkNBLElBQUE7QUE3Qlksb0JBQVksZUE2QnhCLENBQUEiLCJmaWxlIjoic2VydmljZXMvYWxidW0uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWxidW19IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGJ1bVNlcnZpY2Uge1xuICAgIGFsYnVtczogQWxidW1bXSA9IFtdO1xuICAgIGFsYnVtOiBBbGJ1bTtcbiAgICBlcnJvcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIF9odHRwOiBIdHRwKSB7XG4gICAgfVxuXG4gICAgZ2V0UG9wdWxhckFsYnVtcygpOiBQcm9taXNlPEFsYnVtW10+IHtcblxuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuX2h0dHAuZ2V0KGAvYXBpL3BvcHVsYXJgKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuanNvbigpKS50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKGFsYnVtczogQWxidW1bXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxidW1zLnB1c2goLi4uYWxidW1zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGJ1bXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgLy9UT0RPOiBwdXNoIGFydGlzdCBPYmplY3QgaW4gdG9vbGJhciB0aGUgT2JqZWN0IGZsYXR0ZW4/XG4gICAgZ2V0QWxidW0oaWQ6IG51bWJlcikge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuX2h0dHAuZ2V0KGAvYXBpL2FsYnVtLyR7aWR9YClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmpzb24oKSkudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKChhbGJ1bXM6IEFsYnVtW10pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsYnVtcy5wdXNoKC4uLmFsYnVtcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxidW1zWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==