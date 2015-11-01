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
            'Access-Control-Allow-Origin': '*',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FsYnVtLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQWxidW1TZXJ2aWNlIiwiQWxidW1TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQWxidW1TZXJ2aWNlLmdldFBvcHVsYXJBbGJ1bXMiLCJBbGJ1bVNlcnZpY2UuZ2V0QWxidW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLHlCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFpQyxXQUFXLENBQUMsQ0FBQTtBQUc3QztJQU9JQSxzQkFBbUJBLEtBQVdBO1FBQVhDLFVBQUtBLEdBQUxBLEtBQUtBLENBQU1BO1FBTDlCQSxXQUFNQSxHQUFZQSxFQUFFQSxDQUFDQTtRQU1qQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBRURELHVDQUFnQkEsR0FBaEJBO1FBQUFFLGlCQWtCQ0E7UUFoQkdBLElBQUlBLFdBQVdBLEdBQUdBLElBQUlBLGNBQU9BLENBQUNBO1lBQ3RCQSw2QkFBNkJBLEVBQUVBLEdBQUdBO1lBQ2xDQSxRQUFRQSxFQUFFQSxrQkFBa0JBO1lBQzVCQSxjQUFjQSxFQUFFQSxrQkFBa0JBO1lBQ2xDQSxlQUFlQSxFQUFFQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQTtTQUM1Q0EsQ0FBQ0EsQ0FBQ0E7UUFFSEEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQVFBLEdBQUdBLFVBQVVBLEVBQUVBO1lBQ2hEQSxPQUFPQSxFQUFFQSxXQUFXQTtTQUN2QkEsQ0FBQ0E7YUFDR0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsUUFBYUEsSUFBS0EsT0FBQUEsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUE7YUFDbkRBLElBQUlBLENBQUNBLFVBQUNBLE1BQWVBO1lBQ2xCQSxNQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxFQUFDQSxJQUFJQSxXQUFJQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUM1QkEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O1FBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUFFREYsK0JBQVFBLEdBQVJBLFVBQVNBLEVBQVVBO1FBQ2ZHLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLGlCQUFRQSxHQUFHQSxzQkFBbUJBLEVBQUVBLENBQUVBLENBQUNBO2FBQzNEQSxHQUFHQSxDQUFDQSxVQUFDQSxRQUFhQSxJQUFLQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQSxTQUFTQSxFQUFFQTthQUNuREEsSUFBSUEsQ0FBQ0EsVUFBQ0EsS0FBWUE7WUFDZkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBO0lBQ25CQSxDQUFDQTtJQXRDTEg7UUFBQ0EscUJBQVVBLEVBQUVBOztxQkF1Q1pBO0lBQURBLG1CQUFDQTtBQUFEQSxDQXZDQSxBQXVDQ0EsSUFBQTtBQXRDWSxvQkFBWSxlQXNDeEIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9hbGJ1bS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbGJ1bX0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7QVBJX0JBU0UsIEFQUF9CQVNFfSBmcm9tICcuLi9jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGJ1bVNlcnZpY2Uge1xuICAgIGFsYnVtczogQWxidW1bXSA9IFtdO1xuICAgIGFsYnVtOiBBbGJ1bTtcbiAgICBlcnJvcjogYW55O1xuICAgIGp3dDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIF9odHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMuand0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xuICAgIH1cblxuICAgIGdldFBvcHVsYXJBbGJ1bXMoKTogUHJvbWlzZTxBbGJ1bVtdPiB7XG5cbiAgICAgICAgbGV0IGF1dGhIZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ2JlYXJlciAnICsgdGhpcy5qd3RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLl9odHRwLmdldChBUElfQkFTRSArIGAvcG9wdWxhcmAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGF1dGhIZWFkZXJzXG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5qc29uKCkpLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigoYWxidW1zOiBBbGJ1bVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGJ1bXMucHVzaCguLi5hbGJ1bXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsYnVtcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXRBbGJ1bShpZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwcm9taXNlID0gdGhpcy5faHR0cC5nZXQoQVBJX0JBU0UgKyBgL2FsYnVtcy9kZXRhaWxzLyR7aWR9YClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmpzb24oKSkudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKChhbGJ1bTogQWxidW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxidW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9