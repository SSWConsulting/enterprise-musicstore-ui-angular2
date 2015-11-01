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
var config_1 = require('../config');
var GenreService = (function () {
    function GenreService(_http) {
        this._http = _http;
        this.genres = [];
        this.albums = [];
    }
    GenreService.prototype.getGenres = function () {
        var _this = this;
        return this._http.get(config_1.API_BASE + "/genres").map(function (response) { return response.json(); }).toPromise()
            .then(function (genres) {
            (_a = _this.genres).push.apply(_a, genres);
            return _this.genres;
            var _a;
        });
    };
    GenreService.prototype.getGenreAlbums = function (name) {
        var _this = this;
        var promise = this._http.get(config_1.API_BASE + ("/albums/" + name))
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (albums) {
            (_a = _this.albums).push.apply(_a, albums);
            return _this.albums;
            var _a;
        });
        return promise;
    };
    GenreService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GenreService);
    return GenreService;
})();
exports.GenreService = GenreService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dlbnJlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiR2VucmVTZXJ2aWNlIiwiR2VucmVTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiR2VucmVTZXJ2aWNlLmdldEdlbnJlcyIsIkdlbnJlU2VydmljZS5nZXRHZW5yZUFsYnVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMseUJBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFDN0MsdUJBQXVCLFdBQVcsQ0FBQyxDQUFBO0FBRW5DO0lBSUlBLHNCQUFvQkEsS0FBV0E7UUFBWEMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBTUE7UUFGL0JBLFdBQU1BLEdBQVdBLEVBQUVBLENBQUNBO1FBQ3BCQSxXQUFNQSxHQUFZQSxFQUFFQSxDQUFDQTtJQUVyQkEsQ0FBQ0E7SUFFREQsZ0NBQVNBLEdBQVRBO1FBQUFFLGlCQU1DQTtRQUxHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsUUFBUUEsSUFBS0EsT0FBQUEsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUE7YUFDckZBLElBQUlBLENBQUNBLFVBQUNBLE1BQWVBO1lBQ2xCQSxNQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxFQUFDQSxJQUFJQSxXQUFJQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUM1QkEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O1FBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNYQSxDQUFDQTtJQUVERixxQ0FBY0EsR0FBZEEsVUFBZUEsSUFBWUE7UUFBM0JHLGlCQVFDQTtRQVBHQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBUUEsR0FBR0EsY0FBV0EsSUFBSUEsQ0FBRUEsQ0FBQ0E7YUFDckRBLEdBQUdBLENBQUNBLFVBQUNBLFFBQWFBLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQ25EQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFlQTtZQUNsQkEsTUFBQUEsS0FBSUEsQ0FBQ0EsTUFBTUEsRUFBQ0EsSUFBSUEsV0FBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBOztRQUN2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDbkJBLENBQUNBO0lBdkJMSDtRQUFDQSxxQkFBVUEsRUFBRUE7O3FCQXdCWkE7SUFBREEsbUJBQUNBO0FBQURBLENBeEJBLEFBd0JDQSxJQUFBO0FBdkJZLG9CQUFZLGVBdUJ4QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2dlbnJlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dlbnJlLCBBbGJ1bX0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7QVBJX0JBU0V9IGZyb20gJy4uL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW5yZVNlcnZpY2Uge1xuICAgIGdlbnJlczogR2VucmVbXSA9W107XG4gICAgYWxidW1zOiBBbGJ1bVtdID0gW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIGdldEdlbnJlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KEFQSV9CQVNFICsgYC9nZW5yZXNgKS5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigoZ2VucmVzOiBHZW5yZVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5yZXMucHVzaCguLi5nZW5yZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbnJlcztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEdlbnJlQWxidW1zKG5hbWU6IHN0cmluZyk6IFByb21pc2U8QWxidW1bXT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuX2h0dHAuZ2V0KEFQSV9CQVNFICsgYC9hbGJ1bXMvJHtuYW1lfWApXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5qc29uKCkpLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigoYWxidW1zOiBBbGJ1bVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGJ1bXMucHVzaCguLi5hbGJ1bXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsYnVtcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=