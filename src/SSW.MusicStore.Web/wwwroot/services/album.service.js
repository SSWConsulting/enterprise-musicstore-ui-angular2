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
var AlbumService = (function () {
    function AlbumService(_http) {
        this._http = _http;
        this.albums = [];
        this.jwt = localStorage.getItem('jwt');
    }
    AlbumService.prototype.getPopularAlbums = function () {
        var _this = this;
        var authHeaders = new http_1.Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.jwt
        });
        var promise = this._http.get(config_1.API_BASE + "/popular", {
            headers: authHeaders
        })
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (albums) {
            (_a = _this.albums).push.apply(_a, albums);
            return _this.albums;
            var _a;
        });
        return promise;
    };
    AlbumService.prototype.getAlbum = function (id) {
        var promise = this._http.get(config_1.API_BASE + ("/albums/details/" + id))
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (album) {
            return album;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FsYnVtLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQWxidW1TZXJ2aWNlIiwiQWxidW1TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQWxidW1TZXJ2aWNlLmdldFBvcHVsYXJBbGJ1bXMiLCJBbGJ1bVNlcnZpY2UuZ2V0QWxidW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLHlCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUF1QixXQUFXLENBQUMsQ0FBQTtBQUduQztJQU9JQSxzQkFBbUJBLEtBQVdBO1FBQVhDLFVBQUtBLEdBQUxBLEtBQUtBLENBQU1BO1FBTDlCQSxXQUFNQSxHQUFZQSxFQUFFQSxDQUFDQTtRQU1qQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBRURELHVDQUFnQkEsR0FBaEJBO1FBQUFFLGlCQWlCQ0E7UUFmR0EsSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsY0FBT0EsQ0FBQ0E7WUFDdEJBLFFBQVFBLEVBQUVBLGtCQUFrQkE7WUFDNUJBLGNBQWNBLEVBQUVBLGtCQUFrQkE7WUFDbENBLGVBQWVBLEVBQUVBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBO1NBQzVDQSxDQUFDQSxDQUFDQTtRQUVIQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBUUEsR0FBR0EsVUFBVUEsRUFBRUE7WUFDaERBLE9BQU9BLEVBQUVBLFdBQVdBO1NBQ3ZCQSxDQUFDQTthQUNHQSxHQUFHQSxDQUFDQSxVQUFDQSxRQUFhQSxJQUFLQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQSxTQUFTQSxFQUFFQTthQUNuREEsSUFBSUEsQ0FBQ0EsVUFBQ0EsTUFBZUE7WUFDbEJBLE1BQUFBLEtBQUlBLENBQUNBLE1BQU1BLEVBQUNBLElBQUlBLFdBQUlBLE1BQU1BLENBQUNBLENBQUNBO1lBQzVCQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTs7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBO0lBQ25CQSxDQUFDQTtJQUVERiwrQkFBUUEsR0FBUkEsVUFBU0EsRUFBVUE7UUFDZkcsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQVFBLEdBQUdBLHNCQUFtQkEsRUFBRUEsQ0FBRUEsQ0FBQ0E7YUFDM0RBLEdBQUdBLENBQUNBLFVBQUNBLFFBQWFBLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQ25EQSxJQUFJQSxDQUFDQSxVQUFDQSxLQUFZQTtZQUNmQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNqQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDbkJBLENBQUNBO0lBckNMSDtRQUFDQSxxQkFBVUEsRUFBRUE7O3FCQXNDWkE7SUFBREEsbUJBQUNBO0FBQURBLENBdENBLEFBc0NDQSxJQUFBO0FBckNZLG9CQUFZLGVBcUN4QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2FsYnVtLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FsYnVtfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtBUElfQkFTRX0gZnJvbSAnLi4vY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxidW1TZXJ2aWNlIHtcbiAgICBhbGJ1bXM6IEFsYnVtW10gPSBbXTtcbiAgICBhbGJ1bTogQWxidW07XG4gICAgZXJyb3I6IGFueTtcbiAgICBqd3Q6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfaHR0cDogSHR0cCkge1xuICAgICAgICB0aGlzLmp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcbiAgICB9XG5cbiAgICBnZXRQb3B1bGFyQWxidW1zKCk6IFByb21pc2U8QWxidW1bXT4ge1xuXG4gICAgICAgIGxldCBhdXRoSGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnYmVhcmVyICcgKyB0aGlzLmp3dFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuX2h0dHAuZ2V0KEFQSV9CQVNFICsgYC9wb3B1bGFyYCwge1xuICAgICAgICAgICAgaGVhZGVyczogYXV0aEhlYWRlcnNcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmpzb24oKSkudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKChhbGJ1bXM6IEFsYnVtW10pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsYnVtcy5wdXNoKC4uLmFsYnVtcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxidW1zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGdldEFsYnVtKGlkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLl9odHRwLmdldChBUElfQkFTRSArIGAvYWxidW1zL2RldGFpbHMvJHtpZH1gKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuanNvbigpKS50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKGFsYnVtOiBBbGJ1bSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGJ1bTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=