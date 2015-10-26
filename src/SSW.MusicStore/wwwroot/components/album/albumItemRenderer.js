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
var models_1 = require('../../models');
var AlbumItemRenderer = (function () {
    function AlbumItemRenderer() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', models_1.Album)
    ], AlbumItemRenderer.prototype, "album");
    AlbumItemRenderer = __decorate([
        angular2_1.Component({
            selector: 'album-item-renderer',
            template: "\n      <div class=\"card\">\n      \t<img src=\"/images/placeholder.png\" class=\"img-responsive\" alt=\"Album cover image\" width=\"150\" height=\"150\">\n      \t<h4>{{album.title}}</h4>\n      </div>\n    ",
            styles: ["\n      .card:hover {\n      \tcursor: pointer;\t\n      }\n\n      .card {\n        float: left;\n        width: 32%;\n        padding: .75rem;\n        margin: 0.25rem;\n        background-color: #fff;\n      }\n\n      .card > img {\n        margin-bottom: .75rem;\n      }\n\n      .card-text {\n        font-size: 75%;\n      }\n    "],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumItemRenderer);
    return AlbumItemRenderer;
})();
exports.AlbumItemRenderer = AlbumItemRenderer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxidW0vYWxidW1JdGVtUmVuZGVyZXIudHMiXSwibmFtZXMiOlsiQWxidW1JdGVtUmVuZGVyZXIiLCJBbGJ1bUl0ZW1SZW5kZXJlci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBb0IsY0FBYyxDQUFDLENBQUE7QUFFbkM7SUFBQUE7SUFrQ0FDLENBQUNBO0lBREdEO1FBQUNBLGdCQUFLQSxFQUFFQTs7T0FBQ0Esb0NBQUtBLEVBQVFBO0lBakMxQkE7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLHFCQUFxQkE7WUFDL0JBLFFBQVFBLEVBQUVBLG1OQUtUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSxvVkFvQlJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7OzBCQUlEQTtJQUFEQSx3QkFBQ0E7QUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7QUFGWSx5QkFBaUIsb0JBRTdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hbGJ1bS9hbGJ1bUl0ZW1SZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIElucHV0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0FsYnVtfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FsYnVtLWl0ZW0tcmVuZGVyZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgXHQ8aW1nIHNyYz1cIi9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD1cIkFsYnVtIGNvdmVyIGltYWdlXCIgd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxNTBcIj5cbiAgICAgIFx0PGg0Pnt7YWxidW0udGl0bGV9fTwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgIFx0Y3Vyc29yOiBwb2ludGVyO1x0XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgIHBhZGRpbmc6IC43NXJlbTtcbiAgICAgICAgbWFyZ2luOiAwLjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCA+IGltZyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgICAgfVxuICAgIGBdLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgQWxidW1JdGVtUmVuZGVyZXIgIHtcbiAgICBASW5wdXQoKSBhbGJ1bTogQWxidW07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=