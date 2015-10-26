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
var album_service_1 = require('../../services/album.service');
var route_config_1 = require('../../route.config');
var albumItemRenderer_1 = require('../album/albumItemRenderer');
var DashboardComponent = (function () {
    function DashboardComponent(_albumService, _router) {
        this._albumService = _albumService;
        this._router = _router;
    }
    DashboardComponent.prototype.onInit = function () {
        return this.albums = this.getPopularAlbums();
    };
    DashboardComponent.prototype.goToAlbumDetail = function (album) {
        this._router.navigate([("/" + route_config_1.Routes.album.as), { id: album.albumId }]);
    };
    DashboardComponent.prototype.getPopularAlbums = function () {
        var _this = this;
        this._albumService.getPopularAlbums()
            .then(function (albums) {
            return _this.albums = albums;
        });
        return this.albums;
    };
    DashboardComponent = __decorate([
        angular2_1.Component({
            selector: 'dashboard',
            template: "\n      <section class=\"jumbotron text-center\">\n      \t<div class=\"container\">\n      \t\t<div class=\"col-sm-4\">\n      \t\t\t<img src=\"/images/ssw_logo.png\" class=\"img-responsive center-block\">\n      \t\t</div>\n      \t\t<div class=\"col-sm-4 col-sm-offset-4\">\n      \t\t\t<img src=\"/images/angular_logo.jpeg\" class=\"img-responsive\" height=\"148\" width=\"148\">\n      \t\t</div>\n      \t\t<img src=\"/images/home-showcase.png\" class=\"img-responsive\">\n      \t</div>\n      </section>\n\n      <div class=\"album-section\">\n      \t<div class=\"container\">\n      \t\t\t\t<album-item-renderer (click)=\"goToAlbumDetail(album)\"\n      \t\t\t\t\t\t\t\t\t *ng-for=\"#album of albums\"\n      \t\t\t\t\t\t\t\t\t [album]=\"album\">\n      \t\t\t\t</album-item-renderer>\n      \t\t\t</div>\n      \t\t</div>\n    ",
            styles: ["\n      .jumbotron {\n        padding-top: 6rem;\n        padding-bottom: 6rem;\n        margin-bottom: 0;\n        background-color: #fff;\n      }\n\n      .jumbotron p:last-child {\n        margin-bottom: 0;\n      }\n\n      .jumbotron-heading {\n        font-weight: 300;\n      }\n\n      .jumbotron .container {\n        max-width: 40rem;\n      }\n    "],
            directives: [angular2_1.CORE_DIRECTIVES, albumItemRenderer_1.AlbumItemRenderer]
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6WyJEYXNoYm9hcmRDb21wb25lbnQiLCJEYXNoYm9hcmRDb21wb25lbnQuY29uc3RydWN0b3IiLCJEYXNoYm9hcmRDb21wb25lbnQub25Jbml0IiwiRGFzaGJvYXJkQ29tcG9uZW50LmdvVG9BbGJ1bURldGFpbCIsIkRhc2hib2FyZENvbXBvbmVudC5nZXRQb3B1bGFyQWxidW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFpRCxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3JFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLDhCQUEyQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzFELDZCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzFDLGtDQUFnQyw0QkFBNEIsQ0FBQyxDQUFBO0FBRTdEO0lBZ0RJQSw0QkFBb0JBLGFBQTJCQSxFQUFVQSxPQUFlQTtRQUFwREMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWNBO1FBQVVBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO0lBQ3hFQSxDQUFDQTtJQUVERCxtQ0FBTUEsR0FBTkE7UUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtJQUNqREEsQ0FBQ0E7SUFFREYsNENBQWVBLEdBQWZBLFVBQWdCQSxLQUFZQTtRQUN4QkcsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEscUJBQU1BLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQzFFQSxDQUFDQTtJQUVESCw2Q0FBZ0JBLEdBQWhCQTtRQUFBSSxpQkFPQ0E7UUFOR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQTthQUNoQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsTUFBTUE7bUJBQ1JBLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BO1FBQXBCQSxDQUFvQkEsQ0FDdkJBLENBQUNBO1FBRU5BLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQWxFTEo7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO1lBQ3JCQSxRQUFRQSxFQUFFQSx3MEJBcUJUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSwwV0FtQlJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSxxQ0FBaUJBLENBQUVBO1NBQ3BEQSxDQUFDQTs7MkJBc0JEQTtJQUFEQSx5QkFBQ0E7QUFBREEsQ0FuRUEsQUFtRUNBLElBQUE7QUFyQlksMEJBQWtCLHFCQXFCOUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ09SRV9ESVJFQ1RJVkVTLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBbGJ1bX0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7QWxidW1TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbGJ1bS5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVzfSBmcm9tICcuLi8uLi9yb3V0ZS5jb25maWcnO1xuaW1wb3J0IHtBbGJ1bUl0ZW1SZW5kZXJlcn0gZnJvbSAnLi4vYWxidW0vYWxidW1JdGVtUmVuZGVyZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwianVtYm90cm9uIHRleHQtY2VudGVyXCI+XG4gICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgIFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9zc3dfbG9nby5wbmdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGNlbnRlci1ibG9ja1wiPlxuICAgICAgXHRcdDwvZGl2PlxuICAgICAgXHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNCBjb2wtc20tb2Zmc2V0LTRcIj5cbiAgICAgIFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9hbmd1bGFyX2xvZ28uanBlZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBoZWlnaHQ9XCIxNDhcIiB3aWR0aD1cIjE0OFwiPlxuICAgICAgXHRcdDwvZGl2PlxuICAgICAgXHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9ob21lLXNob3djYXNlLnBuZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIj5cbiAgICAgIFx0PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbGJ1bS1zZWN0aW9uXCI+XG4gICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIFx0XHRcdFx0PGFsYnVtLWl0ZW0tcmVuZGVyZXIgKGNsaWNrKT1cImdvVG9BbGJ1bURldGFpbChhbGJ1bSlcIlxuICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0ICpuZy1mb3I9XCIjYWxidW0gb2YgYWxidW1zXCJcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCBbYWxidW1dPVwiYWxidW1cIj5cbiAgICAgIFx0XHRcdFx0PC9hbGJ1bS1pdGVtLXJlbmRlcmVyPlxuICAgICAgXHRcdFx0PC9kaXY+XG4gICAgICBcdFx0PC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAuanVtYm90cm9uIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDZyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuanVtYm90cm9uIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC5qdW1ib3Ryb24taGVhZGluZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICB9XG5cbiAgICAgIC5qdW1ib3Ryb24gLmNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogNDByZW07XG4gICAgICB9XG4gICAgYF0sXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgQWxidW1JdGVtUmVuZGVyZXIgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBhbGJ1bXM6IEFsYnVtW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxidW1TZXJ2aWNlOiBBbGJ1bVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGJ1bXMgPSB0aGlzLmdldFBvcHVsYXJBbGJ1bXMoKTtcbiAgICB9XG5cbiAgICBnb1RvQWxidW1EZXRhaWwoYWxidW06IEFsYnVtKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5hbGJ1bS5hc31gLCB7IGlkOiBhbGJ1bS5hbGJ1bUlkIH1dKTtcbiAgICB9XG5cbiAgICBnZXRQb3B1bGFyQWxidW1zKCkge1xuICAgICAgICB0aGlzLl9hbGJ1bVNlcnZpY2UuZ2V0UG9wdWxhckFsYnVtcygpXG4gICAgICAgICAgICAudGhlbihhbGJ1bXMgPT5cbiAgICAgICAgICAgICAgICB0aGlzLmFsYnVtcyA9IGFsYnVtc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hbGJ1bXM7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9