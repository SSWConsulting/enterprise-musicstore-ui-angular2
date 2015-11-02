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
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var genre_service_1 = require('../../services/genre.service');
var route_config_1 = require('../../route.config');
var album_summary_1 = require('../album/album-summary');
var GenreDetailComponent = (function () {
    function GenreDetailComponent(_genreService, _routeParams, _router) {
        this._genreService = _genreService;
        this._routeParams = _routeParams;
        this._router = _router;
    }
    GenreDetailComponent.prototype.onInit = function () {
        if (!this.albums) {
            this.name = this._routeParams.get('name');
            return this.albums = this.getGenreAlbums(this.name);
        }
    };
    GenreDetailComponent.prototype.getGenreAlbums = function (name) {
        var _this = this;
        this._genreService.getGenreAlbums(name)
            .then(function (albums) {
            return _this.albums = albums;
        });
        return this.albums;
    };
    GenreDetailComponent.prototype.goToAlbumDetail = function (album) {
        this._router.navigate([("/" + route_config_1.Routes.album.as), { id: album.albumId }]);
    };
    GenreDetailComponent = __decorate([
        angular2_1.Component({
            selector: 'genre-detail',
            template: "\n    <div class=\"album-section\">\n    \t<div class=\"container\">\n    \t\t<h2 class=\"title\">{{name}} Albums</h2>\n    \t\t<album-summary (click)=\"goToAlbumDetail(album)\"\n    \t\t\t\t\t\t\t *ng-for=\"#album of albums\"\n    \t\t\t\t\t\t\t [album]=\"album\">\n    \t\t</album-summary>\n    \t</div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, album_summary_1.AlbumSummary],
            styles: ["\n    [class*='col-'] { float: left; }\n\n    *, *:after, *:before {\n    \t-webkit-box-sizing: border-box;\n    \t-moz-box-sizing: border-box;\n    \tbox-sizing: border-box;\n    }\n\n    h3 { text-align: center; margin-bottom: 0; }\n\n    [class*='col-'] { padding-right: 20px; padding-bottom: 20px;}\n    [class*='col-']:last-of-type { padding-right: 0; }\n\n    .grid { margin: 0 10em; }\n    .col-1-4 { width: 25%; }\n    .module {\n    \tpadding: 20px;\n    \ttext-align: center;\n    \tcolor: #eee;\n    \tmax-height: 120px;\n    \tmin-width: 120px;\n    \tbackground-color: #1171a3;\n    }\n\n    .module:hover { background-color: #52b9e9; cursor: pointer; }\n\n    .grid-pad { padding: 20px 0 20px 20px; }\n    .grid-pad > [class*='col-']:last-of-type { padding-right: 20px; }\n\n    @media (max-width: 600px) {\n    \t.module { font-size: 10px; max-height: 75px; }\n    }\n\n    @media (max-width: 1024px) {\n    \t.grid { margin: 0; }\n    \t.module { min-width: 60px; }\n    }\n  "],
            inputs: ['genre']
        }), 
        __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.RouteParams, router_1.Router])
    ], GenreDetailComponent);
    return GenreDetailComponent;
})();
exports.GenreDetailComponent = GenreDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VucmUvZ2VucmUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJHZW5yZURldGFpbENvbXBvbmVudCIsIkdlbnJlRGV0YWlsQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiR2VucmVEZXRhaWxDb21wb25lbnQub25Jbml0IiwiR2VucmVEZXRhaWxDb21wb25lbnQuZ2V0R2VucmVBbGJ1bXMiLCJHZW5yZURldGFpbENvbXBvbmVudC5nb1RvQWxidW1EZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQWlELG1CQUFtQixDQUFDLENBQUE7QUFDckUsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsOEJBQTJCLDhCQUE4QixDQUFDLENBQUE7QUFDMUQsNkJBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFDMUMsOEJBQTJCLHdCQUF3QixDQUFDLENBQUE7QUFFcEQ7SUEyREVBLDhCQUFvQkEsYUFBMkJBLEVBQ3JDQSxZQUF5QkEsRUFBVUEsT0FBZUE7UUFEeENDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFjQTtRQUNyQ0EsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO1FBQVVBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO0lBQzVEQSxDQUFDQTtJQUVERCxxQ0FBTUEsR0FBTkE7UUFDRUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQzFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN0REEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFREYsNkNBQWNBLEdBQWRBLFVBQWVBLElBQVlBO1FBQTNCRyxpQkFNQ0E7UUFMQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7YUFDcENBLElBQUlBLENBQUNBLFVBQUFBLE1BQU1BO21CQUNWQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQTtRQUFwQkEsQ0FBb0JBLENBQ3JCQSxDQUFDQTtRQUNKQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFREgsOENBQWVBLEdBQWZBLFVBQWdCQSxLQUFZQTtRQUMxQkksSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEscUJBQU1BLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3hFQSxDQUFDQTtJQWhGSEo7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGNBQWNBO1lBQ3hCQSxRQUFRQSxFQUFFQSxtVUFVVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLEVBQUVBLDRCQUFZQSxDQUFDQTtZQUMzQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsaytCQXNDUkEsQ0FBQ0E7WUFDRkEsTUFBTUEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7U0FDbEJBLENBQUNBOzs2QkEyQkRBO0lBQURBLDJCQUFDQTtBQUFEQSxDQWpGQSxBQWlGQ0EsSUFBQTtBQTFCWSw0QkFBb0IsdUJBMEJoQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2VucmUvZ2VucmUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBbGJ1bX0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7R2VucmVTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZW5yZS5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVzfSBmcm9tICcuLi8uLi9yb3V0ZS5jb25maWcnO1xuaW1wb3J0IHtBbGJ1bVN1bW1hcnl9IGZyb20gJy4uL2FsYnVtL2FsYnVtLXN1bW1hcnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZW5yZS1kZXRhaWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbGJ1bS1zZWN0aW9uXCI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXHRcdDxoMiBjbGFzcz1cInRpdGxlXCI+e3tuYW1lfX0gQWxidW1zPC9oMj5cbiAgICBcdFx0PGFsYnVtLXN1bW1hcnkgKGNsaWNrKT1cImdvVG9BbGJ1bURldGFpbChhbGJ1bSlcIlxuICAgIFx0XHRcdFx0XHRcdFx0ICpuZy1mb3I9XCIjYWxidW0gb2YgYWxidW1zXCJcbiAgICBcdFx0XHRcdFx0XHRcdCBbYWxidW1dPVwiYWxidW1cIj5cbiAgICBcdFx0PC9hbGJ1bS1zdW1tYXJ5PlxuICAgIFx0PC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEFsYnVtU3VtbWFyeV0sXG4gIHN0eWxlczogW2BcbiAgICBbY2xhc3MqPSdjb2wtJ10geyBmbG9hdDogbGVmdDsgfVxuXG4gICAgKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAgIFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBoMyB7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4gICAgW2NsYXNzKj0nY29sLSddIHsgcGFkZGluZy1yaWdodDogMjBweDsgcGFkZGluZy1ib3R0b206IDIwcHg7fVxuICAgIFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUgeyBwYWRkaW5nLXJpZ2h0OiAwOyB9XG5cbiAgICAuZ3JpZCB7IG1hcmdpbjogMCAxMGVtOyB9XG4gICAgLmNvbC0xLTQgeyB3aWR0aDogMjUlOyB9XG4gICAgLm1vZHVsZSB7XG4gICAgXHRwYWRkaW5nOiAyMHB4O1xuICAgIFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFx0Y29sb3I6ICNlZWU7XG4gICAgXHRtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBcdG1pbi13aWR0aDogMTIwcHg7XG4gICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3MWEzO1xuICAgIH1cblxuICAgIC5tb2R1bGU6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOWU5OyBjdXJzb3I6IHBvaW50ZXI7IH1cblxuICAgIC5ncmlkLXBhZCB7IHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7IH1cbiAgICAuZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHsgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgXHQubW9kdWxlIHsgZm9udC1zaXplOiAxMHB4OyBtYXgtaGVpZ2h0OiA3NXB4OyB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIFx0LmdyaWQgeyBtYXJnaW46IDA7IH1cbiAgICBcdC5tb2R1bGUgeyBtaW4td2lkdGg6IDYwcHg7IH1cbiAgICB9XG4gIGBdLFxuICBpbnB1dHM6IFsnZ2VucmUnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW5yZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFsYnVtczogQWxidW1bXTtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dlbnJlU2VydmljZTogR2VucmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG9uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYWxidW1zKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICAgIHJldHVybiB0aGlzLmFsYnVtcyA9IHRoaXMuZ2V0R2VucmVBbGJ1bXModGhpcy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBnZXRHZW5yZUFsYnVtcyhuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nZW5yZVNlcnZpY2UuZ2V0R2VucmVBbGJ1bXMobmFtZSlcbiAgICAgIC50aGVuKGFsYnVtcyA9PlxuICAgICAgICB0aGlzLmFsYnVtcyA9IGFsYnVtc1xuICAgICAgKTtcbiAgICByZXR1cm4gdGhpcy5hbGJ1bXM7XG4gIH1cblxuICBnb1RvQWxidW1EZXRhaWwoYWxidW06IEFsYnVtKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmFsYnVtLmFzfWAsIHsgaWQ6IGFsYnVtLmFsYnVtSWQgfV0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=