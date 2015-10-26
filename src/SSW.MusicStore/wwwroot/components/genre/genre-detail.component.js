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
var albumItemRenderer_1 = require('../album/albumItemRenderer');
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
            template: "\n    <div class=\"album-section\">\n    \t<div class=\"container\">\n    \t\t<h2 class=\"title\">{{name}} Albums</h2>\n    \t\t<album-item-renderer (click)=\"goToAlbumDetail(album)\"\n    \t\t\t\t\t\t\t *ng-for=\"#album of albums\"\n    \t\t\t\t\t\t\t [album]=\"album\">\n    \t\t</album-item-renderer>\n    \t</div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, albumItemRenderer_1.AlbumItemRenderer],
            styles: ["\n    [class*='col-'] { float: left; }\n\n    *, *:after, *:before {\n    \t-webkit-box-sizing: border-box;\n    \t-moz-box-sizing: border-box;\n    \tbox-sizing: border-box;\n    }\n\n    h3 { text-align: center; margin-bottom: 0; }\n\n    [class*='col-'] { padding-right: 20px; padding-bottom: 20px;}\n    [class*='col-']:last-of-type { padding-right: 0; }\n\n    .grid { margin: 0 10em; }\n    .col-1-4 { width: 25%; }\n    .module {\n    \tpadding: 20px;\n    \ttext-align: center;\n    \tcolor: #eee;\n    \tmax-height: 120px;\n    \tmin-width: 120px;\n    \tbackground-color: #1171a3;\n    }\n\n    .module:hover { background-color: #52b9e9; cursor: pointer; }\n\n    .grid-pad { padding: 20px 0 20px 20px; }\n    .grid-pad > [class*='col-']:last-of-type { padding-right: 20px; }\n\n    @media (max-width: 600px) {\n    \t.module { font-size: 10px; max-height: 75px; }\n    }\n\n    @media (max-width: 1024px) {\n    \t.grid { margin: 0; }\n    \t.module { min-width: 60px; }\n    }\n  "],
            inputs: ['genre']
        }), 
        __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.RouteParams, router_1.Router])
    ], GenreDetailComponent);
    return GenreDetailComponent;
})();
exports.GenreDetailComponent = GenreDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VucmUvZ2VucmUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJHZW5yZURldGFpbENvbXBvbmVudCIsIkdlbnJlRGV0YWlsQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiR2VucmVEZXRhaWxDb21wb25lbnQub25Jbml0IiwiR2VucmVEZXRhaWxDb21wb25lbnQuZ2V0R2VucmVBbGJ1bXMiLCJHZW5yZURldGFpbENvbXBvbmVudC5nb1RvQWxidW1EZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQWlELG1CQUFtQixDQUFDLENBQUE7QUFDckUsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsOEJBQTJCLDhCQUE4QixDQUFDLENBQUE7QUFDMUQsNkJBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFDMUMsa0NBQWdDLDRCQUE0QixDQUFDLENBQUE7QUFFN0Q7SUEyREVBLDhCQUFvQkEsYUFBMkJBLEVBQ3JDQSxZQUF5QkEsRUFBVUEsT0FBZUE7UUFEeENDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFjQTtRQUNyQ0EsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO1FBQVVBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO0lBQzVEQSxDQUFDQTtJQUVERCxxQ0FBTUEsR0FBTkE7UUFDRUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQzFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN0REEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFREYsNkNBQWNBLEdBQWRBLFVBQWVBLElBQVlBO1FBQTNCRyxpQkFNQ0E7UUFMQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7YUFDcENBLElBQUlBLENBQUNBLFVBQUFBLE1BQU1BO21CQUNWQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQTtRQUFwQkEsQ0FBb0JBLENBQ3JCQSxDQUFDQTtRQUNKQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFREgsOENBQWVBLEdBQWZBLFVBQWdCQSxLQUFZQTtRQUMxQkksSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEscUJBQU1BLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3hFQSxDQUFDQTtJQWhGSEo7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGNBQWNBO1lBQ3hCQSxRQUFRQSxFQUFFQSwrVUFVVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLEVBQUVBLHFDQUFpQkEsQ0FBQ0E7WUFDaERBLE1BQU1BLEVBQUVBLENBQUNBLGsrQkFzQ1JBLENBQUNBO1lBQ0ZBLE1BQU1BLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBO1NBQ2xCQSxDQUFDQTs7NkJBMkJEQTtJQUFEQSwyQkFBQ0E7QUFBREEsQ0FqRkEsQUFpRkNBLElBQUE7QUExQlksNEJBQW9CLHVCQTBCaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dlbnJlL2dlbnJlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ09SRV9ESVJFQ1RJVkVTLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QWxidW19IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQge0dlbnJlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VucmUuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlc30gZnJvbSAnLi4vLi4vcm91dGUuY29uZmlnJztcbmltcG9ydCB7QWxidW1JdGVtUmVuZGVyZXJ9IGZyb20gJy4uL2FsYnVtL2FsYnVtSXRlbVJlbmRlcmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2VucmUtZGV0YWlsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxidW0tc2VjdGlvblwiPlxuICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIFx0XHQ8aDIgY2xhc3M9XCJ0aXRsZVwiPnt7bmFtZX19IEFsYnVtczwvaDI+XG4gICAgXHRcdDxhbGJ1bS1pdGVtLXJlbmRlcmVyIChjbGljayk9XCJnb1RvQWxidW1EZXRhaWwoYWxidW0pXCJcbiAgICBcdFx0XHRcdFx0XHRcdCAqbmctZm9yPVwiI2FsYnVtIG9mIGFsYnVtc1wiXG4gICAgXHRcdFx0XHRcdFx0XHQgW2FsYnVtXT1cImFsYnVtXCI+XG4gICAgXHRcdDwvYWxidW0taXRlbS1yZW5kZXJlcj5cbiAgICBcdDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBBbGJ1bUl0ZW1SZW5kZXJlcl0sXG4gIHN0eWxlczogW2BcbiAgICBbY2xhc3MqPSdjb2wtJ10geyBmbG9hdDogbGVmdDsgfVxuXG4gICAgKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAgIFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBoMyB7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4gICAgW2NsYXNzKj0nY29sLSddIHsgcGFkZGluZy1yaWdodDogMjBweDsgcGFkZGluZy1ib3R0b206IDIwcHg7fVxuICAgIFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUgeyBwYWRkaW5nLXJpZ2h0OiAwOyB9XG5cbiAgICAuZ3JpZCB7IG1hcmdpbjogMCAxMGVtOyB9XG4gICAgLmNvbC0xLTQgeyB3aWR0aDogMjUlOyB9XG4gICAgLm1vZHVsZSB7XG4gICAgXHRwYWRkaW5nOiAyMHB4O1xuICAgIFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFx0Y29sb3I6ICNlZWU7XG4gICAgXHRtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBcdG1pbi13aWR0aDogMTIwcHg7XG4gICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3MWEzO1xuICAgIH1cblxuICAgIC5tb2R1bGU6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOWU5OyBjdXJzb3I6IHBvaW50ZXI7IH1cblxuICAgIC5ncmlkLXBhZCB7IHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7IH1cbiAgICAuZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHsgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgXHQubW9kdWxlIHsgZm9udC1zaXplOiAxMHB4OyBtYXgtaGVpZ2h0OiA3NXB4OyB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIFx0LmdyaWQgeyBtYXJnaW46IDA7IH1cbiAgICBcdC5tb2R1bGUgeyBtaW4td2lkdGg6IDYwcHg7IH1cbiAgICB9XG4gIGBdLFxuICBpbnB1dHM6IFsnZ2VucmUnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW5yZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFsYnVtczogQWxidW1bXTtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dlbnJlU2VydmljZTogR2VucmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG9uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYWxidW1zKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICAgIHJldHVybiB0aGlzLmFsYnVtcyA9IHRoaXMuZ2V0R2VucmVBbGJ1bXModGhpcy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBnZXRHZW5yZUFsYnVtcyhuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nZW5yZVNlcnZpY2UuZ2V0R2VucmVBbGJ1bXMobmFtZSlcbiAgICAgIC50aGVuKGFsYnVtcyA9PlxuICAgICAgICB0aGlzLmFsYnVtcyA9IGFsYnVtc1xuICAgICAgKTtcbiAgICByZXR1cm4gdGhpcy5hbGJ1bXM7XG4gIH1cblxuICBnb1RvQWxidW1EZXRhaWwoYWxidW06IEFsYnVtKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmFsYnVtLmFzfWAsIHsgaWQ6IGFsYnVtLmFsYnVtSWQgfV0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=