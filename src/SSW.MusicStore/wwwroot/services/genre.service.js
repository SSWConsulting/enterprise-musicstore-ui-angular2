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
    function GenreService(_http) {
        this._http = _http;
        this.genres = [];
        this.albums = [];
    }
    GenreService.prototype.getGenres = function () {
        var _this = this;
        return this._http.get('api/genres').map(function (response) { return response.json(); }).toPromise()
            .then(function (genres) {
            (_a = _this.genres).push.apply(_a, genres);
            return _this.genres;
            var _a;
        });
    };
    GenreService.prototype.getGenreAlbums = function (name) {
        var _this = this;
        var promise = this._http.get("api/albums/" + name)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dlbnJlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiR2VucmVTZXJ2aWNlIiwiR2VucmVTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiR2VucmVTZXJ2aWNlLmdldEdlbnJlcyIsIkdlbnJlU2VydmljZS5nZXRHZW5yZUFsYnVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMseUJBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFFN0M7SUFJSUEsc0JBQW9CQSxLQUFXQTtRQUFYQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFNQTtRQUYvQkEsV0FBTUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDcEJBLFdBQU1BLEdBQVlBLEVBQUVBLENBQUNBO0lBRXJCQSxDQUFDQTtJQUVERCxnQ0FBU0EsR0FBVEE7UUFBQUUsaUJBTUNBO1FBTEdBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUNBLFFBQVFBLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQzdFQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFlQTtZQUNsQkEsTUFBQUEsS0FBSUEsQ0FBQ0EsTUFBTUEsRUFBQ0EsSUFBSUEsV0FBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBOztRQUN2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDWEEsQ0FBQ0E7SUFFREYscUNBQWNBLEdBQWRBLFVBQWVBLElBQVlBO1FBQTNCRyxpQkFRQ0E7UUFQR0EsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0JBQWNBLElBQU1BLENBQUNBO2FBQzdDQSxHQUFHQSxDQUFDQSxVQUFDQSxRQUFhQSxJQUFLQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQSxTQUFTQSxFQUFFQTthQUNuREEsSUFBSUEsQ0FBQ0EsVUFBQ0EsTUFBZUE7WUFDbEJBLE1BQUFBLEtBQUlBLENBQUNBLE1BQU1BLEVBQUNBLElBQUlBLFdBQUlBLE1BQU1BLENBQUNBLENBQUNBO1lBQzVCQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTs7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBO0lBQ25CQSxDQUFDQTtJQXZCTEg7UUFBQ0EscUJBQVVBLEVBQUVBOztxQkF3QlpBO0lBQURBLG1CQUFDQTtBQUFEQSxDQXhCQSxBQXdCQ0EsSUFBQTtBQXZCWSxvQkFBWSxlQXVCeEIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9nZW5yZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZW5yZSwgQWxidW19IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW5yZVNlcnZpY2Uge1xuICAgIGdlbnJlczogR2VucmVbXSA9W107XG4gICAgYWxidW1zOiBBbGJ1bVtdID0gW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIGdldEdlbnJlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdhcGkvZ2VucmVzJykubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKS50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKGdlbnJlczogR2VucmVbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VucmVzLnB1c2goLi4uZ2VucmVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5yZXM7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRHZW5yZUFsYnVtcyhuYW1lOiBzdHJpbmcpOiBQcm9taXNlPEFsYnVtW10+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLl9odHRwLmdldChgYXBpL2FsYnVtcy8ke25hbWV9YClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmpzb24oKSkudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKChhbGJ1bXM6IEFsYnVtW10pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsYnVtcy5wdXNoKC4uLmFsYnVtcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxidW1zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==