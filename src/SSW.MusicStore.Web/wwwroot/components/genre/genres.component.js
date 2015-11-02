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
var genre_detail_component_1 = require('./genre-detail.component');
var route_config_1 = require('../../route.config');
var GenresComponent = (function () {
    function GenresComponent(_genreService, _router) {
        this._genreService = _genreService;
        this._router = _router;
    }
    GenresComponent.prototype.onInit = function () {
        this.genres = this.getGenres();
    };
    GenresComponent.prototype.getGenres = function () {
        var _this = this;
        this.genres = [];
        this._genreService.getGenres()
            .then(function (genres) { return _this.genres = genres; });
        return this.genres;
    };
    GenresComponent.prototype.goToGenre = function (genre) {
        this._router.navigate([("/" + route_config_1.Routes.genre.as), { name: genre.name }]);
    };
    GenresComponent = __decorate([
        angular2_1.Component({
            selector: 'my-genres',
            template: "\n      <div class=\"container\">\n      \t<h2 class=\"title\">Genres</h2>\n      \t<div class=\"list-group\">\n      \t\t<button *ng-for=\"#genre of genres\" (click)=\"goToGenre(genre)\" type=\"button\" class=\"list-group-item\">{{genre.name}}</button>\n      \t</div>\n      </div>\n    ",
            styles: ["\n      .genres {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\n      .genres li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\n      .genres li:hover {color: #369; background-color: #EEE; left: .2em;}\n\n      .genres .badge {\n      \tfont-size: small;\n      \tcolor: white;\n      \tpadding: 0.1em 0.7em;\n      \tbackground-color: #369;\n      \tline-height: 1em;\n      \tposition: relative;\n      \tleft: -1px;\n      \ttop: -1px;\n      }\n      .selected { background-color: #EEE; color: #369; }\n    "],
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, genre_detail_component_1.GenreDetailComponent]
        }), 
        __metadata('design:paramtypes', [genre_service_1.GenreService, router_1.Router])
    ], GenresComponent);
    return GenresComponent;
})();
exports.GenresComponent = GenresComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VucmUvZ2VucmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJHZW5yZXNDb21wb25lbnQiLCJHZW5yZXNDb21wb25lbnQuY29uc3RydWN0b3IiLCJHZW5yZXNDb21wb25lbnQub25Jbml0IiwiR2VucmVzQ29tcG9uZW50LmdldEdlbnJlcyIsIkdlbnJlc0NvbXBvbmVudC5nb1RvR2VucmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQWtFLG1CQUFtQixDQUFDLENBQUE7QUFDdEYsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsOEJBQTJCLDhCQUE4QixDQUFDLENBQUE7QUFDMUQsdUNBQW1DLDBCQUEwQixDQUFDLENBQUE7QUFFOUQsNkJBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFFMUM7SUFrQ0lBLHlCQUFvQkEsYUFBMkJBLEVBQVVBLE9BQWVBO1FBQXBEQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBY0E7UUFBVUEsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7SUFDeEVBLENBQUNBO0lBRURELGdDQUFNQSxHQUFOQTtRQUNJRSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFFREYsbUNBQVNBLEdBQVRBO1FBQUFHLGlCQUtDQTtRQUpHQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsU0FBU0EsRUFBRUE7YUFDekJBLElBQUlBLENBQUNBLFVBQUFBLE1BQU1BLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLEVBQXBCQSxDQUFvQkEsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVESCxtQ0FBU0EsR0FBVEEsVUFBVUEsS0FBWUE7UUFDbEJJLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLE9BQUlBLHFCQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFFQSxDQUFFQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN6RUEsQ0FBQ0E7SUFsRExKO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsUUFBUUEsRUFBRUEsbVNBT1RBO1lBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLHlqQkFrQlJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSwwQkFBZUEsRUFBRUEsNkNBQW9CQSxDQUFDQTtTQUN2RUEsQ0FBQ0E7O3dCQXNCREE7SUFBREEsc0JBQUNBO0FBQURBLENBcERBLEFBb0RDQSxJQUFBO0FBckJZLHVCQUFlLGtCQXFCM0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dlbnJlL2dlbnJlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0dlbnJlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VucmUuc2VydmljZSc7XG5pbXBvcnQge0dlbnJlRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2dlbnJlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtHZW5yZX0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7Um91dGVzfSBmcm9tICcuLi8uLi9yb3V0ZS5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWdlbnJlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIFx0PGgyIGNsYXNzPVwidGl0bGVcIj5HZW5yZXM8L2gyPlxuICAgICAgXHQ8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgXHRcdDxidXR0b24gKm5nLWZvcj1cIiNnZW5yZSBvZiBnZW5yZXNcIiAoY2xpY2spPVwiZ29Ub0dlbnJlKGdlbnJlKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPnt7Z2VucmUubmFtZX19PC9idXR0b24+XG4gICAgICBcdDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAuZ2VucmVzIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IG1hcmdpbi1sZWZ0OiAxZW07IHBhZGRpbmc6IDA7IHdpZHRoOiAxMGVtO31cblxuICAgICAgLmdlbnJlcyBsaSB7IGN1cnNvcjogcG9pbnRlcjsgcG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAwOyB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOyB9XG5cbiAgICAgIC5nZW5yZXMgbGk6aG92ZXIge2NvbG9yOiAjMzY5OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFOyBsZWZ0OiAuMmVtO31cblxuICAgICAgLmdlbnJlcyAuYmFkZ2Uge1xuICAgICAgXHRmb250LXNpemU6IHNtYWxsO1xuICAgICAgXHRjb2xvcjogd2hpdGU7XG4gICAgICBcdHBhZGRpbmc6IDAuMWVtIDAuN2VtO1xuICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5O1xuICAgICAgXHRsaW5lLWhlaWdodDogMWVtO1xuICAgICAgXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcdGxlZnQ6IC0xcHg7XG4gICAgICBcdHRvcDogLTFweDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6ICNFRUU7IGNvbG9yOiAjMzY5OyB9XG4gICAgYF0sXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBHZW5yZURldGFpbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR2VucmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgZ2VucmVzOiBHZW5yZVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2VucmVTZXJ2aWNlOiBHZW5yZVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLmdlbnJlcyA9IHRoaXMuZ2V0R2VucmVzKCk7XG4gICAgfVxuXG4gICAgZ2V0R2VucmVzKCkge1xuICAgICAgICB0aGlzLmdlbnJlcyA9IFtdO1xuICAgICAgICB0aGlzLl9nZW5yZVNlcnZpY2UuZ2V0R2VucmVzKClcbiAgICAgICAgICAgIC50aGVuKGdlbnJlcyA9PiB0aGlzLmdlbnJlcyA9IGdlbnJlcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbnJlcztcbiAgICB9XG5cbiAgICBnb1RvR2VucmUoZ2VucmU6IEdlbnJlKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5nZW5yZS5hc31gLCB7IG5hbWU6IGdlbnJlLm5hbWUgfV0pO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9