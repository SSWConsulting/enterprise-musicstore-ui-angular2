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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FsYnVtLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQWxidW1TZXJ2aWNlIiwiQWxidW1TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQWxidW1TZXJ2aWNlLmdldFBvcHVsYXJBbGJ1bXMiLCJBbGJ1bVNlcnZpY2UuZ2V0QWxidW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLHlCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBRTdDO0lBTUlBLHNCQUFtQkEsS0FBV0E7UUFBWEMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBTUE7UUFKOUJBLFdBQU1BLEdBQVlBLEVBQUVBLENBQUNBO0lBS3JCQSxDQUFDQTtJQUVERCx1Q0FBZ0JBLEdBQWhCQTtRQUFBRSxpQkFTQ0E7UUFQR0EsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsY0FBY0EsQ0FBQ0E7YUFDdkNBLEdBQUdBLENBQUNBLFVBQUNBLFFBQWFBLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQ25EQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFlQTtZQUNsQkEsTUFBQUEsS0FBSUEsQ0FBQ0EsTUFBTUEsRUFBQ0EsSUFBSUEsV0FBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBOztRQUN2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDbkJBLENBQUNBO0lBRURGLCtCQUFRQSxHQUFSQSxVQUFTQSxFQUFVQTtRQUNmRyxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSx5QkFBdUJBLEVBQUlBLENBQUNBO2FBQ3BEQSxHQUFHQSxDQUFDQSxVQUFDQSxRQUFhQSxJQUFLQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQSxTQUFTQSxFQUFFQTthQUNuREEsSUFBSUEsQ0FBQ0EsVUFBQ0EsS0FBWUE7WUFDZkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBO0lBQ25CQSxDQUFDQTtJQTNCTEg7UUFBQ0EscUJBQVVBLEVBQUVBOztxQkE0QlpBO0lBQURBLG1CQUFDQTtBQUFEQSxDQTVCQSxBQTRCQ0EsSUFBQTtBQTNCWSxvQkFBWSxlQTJCeEIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9hbGJ1bS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbGJ1bX0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsYnVtU2VydmljZSB7XG4gICAgYWxidW1zOiBBbGJ1bVtdID0gW107XG4gICAgYWxidW06IEFsYnVtO1xuICAgIGVycm9yOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2h0dHA6IEh0dHApIHtcbiAgICB9XG5cbiAgICBnZXRQb3B1bGFyQWxidW1zKCk6IFByb21pc2U8QWxidW1bXT4ge1xuXG4gICAgICAgIGxldCBwcm9taXNlID0gdGhpcy5faHR0cC5nZXQoYC9hcGkvcG9wdWxhcmApXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5qc29uKCkpLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigoYWxidW1zOiBBbGJ1bVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGJ1bXMucHVzaCguLi5hbGJ1bXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsYnVtcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXRBbGJ1bShpZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwcm9taXNlID0gdGhpcy5faHR0cC5nZXQoYC9hcGkvYWxidW1zL2RldGFpbHMvJHtpZH1gKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuanNvbigpKS50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKGFsYnVtOiBBbGJ1bSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGJ1bTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=