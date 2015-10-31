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
        this.jwt = localStorage.getItem('jwt');
    }
    AlbumService.prototype.getPopularAlbums = function () {
        var _this = this;
        var authHeaders = new http_1.Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.jwt
        });
        var promise = this._http.get("/api/popular", {
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
        var promise = this._http.get("/api/albums/details/" + id)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FsYnVtLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQWxidW1TZXJ2aWNlIiwiQWxidW1TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQWxidW1TZXJ2aWNlLmdldFBvcHVsYXJBbGJ1bXMiLCJBbGJ1bVNlcnZpY2UuZ2V0QWxidW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLHlCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBRTdDO0lBT0lBLHNCQUFtQkEsS0FBV0E7UUFBWEMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBTUE7UUFMOUJBLFdBQU1BLEdBQVlBLEVBQUVBLENBQUNBO1FBTWpCQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUMzQ0EsQ0FBQ0E7SUFFREQsdUNBQWdCQSxHQUFoQkE7UUFBQUUsaUJBaUJDQTtRQWZHQSxJQUFJQSxXQUFXQSxHQUFHQSxJQUFJQSxjQUFPQSxDQUFDQTtZQUMxQkEsUUFBUUEsRUFBRUEsa0JBQWtCQTtZQUM1QkEsY0FBY0EsRUFBRUEsa0JBQWtCQTtZQUNsQ0EsZUFBZUEsRUFBRUEsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0E7U0FDeENBLENBQUNBLENBQUNBO1FBRUhBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLEVBQUVBO1lBQ3pDQSxPQUFPQSxFQUFFQSxXQUFXQTtTQUN2QkEsQ0FBQ0E7YUFDR0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsUUFBYUEsSUFBS0EsT0FBQUEsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUE7YUFDbkRBLElBQUlBLENBQUNBLFVBQUNBLE1BQWVBO1lBQ2xCQSxNQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxFQUFDQSxJQUFJQSxXQUFJQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUM1QkEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O1FBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUFFREYsK0JBQVFBLEdBQVJBLFVBQVNBLEVBQVVBO1FBQ2ZHLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLHlCQUF1QkEsRUFBSUEsQ0FBQ0E7YUFDcERBLEdBQUdBLENBQUNBLFVBQUNBLFFBQWFBLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQ25EQSxJQUFJQSxDQUFDQSxVQUFDQSxLQUFZQTtZQUNmQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNqQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDbkJBLENBQUNBO0lBckNMSDtRQUFDQSxxQkFBVUEsRUFBRUE7O3FCQXNDWkE7SUFBREEsbUJBQUNBO0FBQURBLENBdENBLEFBc0NDQSxJQUFBO0FBckNZLG9CQUFZLGVBcUN4QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2FsYnVtLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FsYnVtfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxidW1TZXJ2aWNlIHtcbiAgICBhbGJ1bXM6IEFsYnVtW10gPSBbXTtcbiAgICBhbGJ1bTogQWxidW07XG4gICAgZXJyb3I6IGFueTtcbiAgICBqd3Q6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfaHR0cDogSHR0cCkge1xuICAgICAgICB0aGlzLmp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcbiAgICB9XG5cbiAgICBnZXRQb3B1bGFyQWxidW1zKCk6IFByb21pc2U8QWxidW1bXT4ge1xuXG4gICAgICAgIGxldCBhdXRoSGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnYmVhcmVyICcgKyB0aGlzLmp3dFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuX2h0dHAuZ2V0KGAvYXBpL3BvcHVsYXJgLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBhdXRoSGVhZGVyc1xuICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuanNvbigpKS50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKGFsYnVtczogQWxidW1bXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxidW1zLnB1c2goLi4uYWxidW1zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGJ1bXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZ2V0QWxidW0oaWQ6IG51bWJlcikge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuX2h0dHAuZ2V0KGAvYXBpL2FsYnVtcy9kZXRhaWxzLyR7aWR9YClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmpzb24oKSkudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKChhbGJ1bTogQWxidW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxidW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9