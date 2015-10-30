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
var album_summary_1 = require('../album/album-summary');
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
            template: "\n      <section class=\"jumbotron text-center\">\n      \t<div class=\"container\">\n      \t\t<div class=\"col-sm-4\">\n      \t\t\t<img src=\"/images/ssw_logo.png\" class=\"img-responsive center-block\">\n      \t\t</div>\n      \t\t<div class=\"col-sm-4 col-sm-offset-4\">\n      \t\t\t<img src=\"/images/angular_logo.jpeg\" class=\"img-responsive\" height=\"148\" width=\"148\">\n      \t\t</div>\n      \t\t<img src=\"/images/home-showcase.png\" class=\"img-responsive\">\n      \t</div>\n      </section>\n\n      <div class=\"album-section\">\n      \t<div class=\"container\">\n      \t\t\t\t<album-summary (click)=\"goToAlbumDetail(album)\"\n      \t\t\t\t\t\t\t\t\t *ng-for=\"#album of albums\"\n      \t\t\t\t\t\t\t\t\t [album]=\"album\">\n      \t\t\t\t</album-summary>\n      \t\t\t</div>\n      \t\t</div>\n    ",
            styles: ["\n      .jumbotron {\n        padding-top: 6rem;\n        padding-bottom: 6rem;\n        margin-bottom: 0;\n        background-color: #fff;\n      }\n\n      .jumbotron p:last-child {\n        margin-bottom: 0;\n      }\n\n      .jumbotron-heading {\n        font-weight: 300;\n      }\n\n      .jumbotron .container {\n        max-width: 40rem;\n      }\n    "],
            directives: [angular2_1.CORE_DIRECTIVES, album_summary_1.AlbumSummary]
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6WyJEYXNoYm9hcmRDb21wb25lbnQiLCJEYXNoYm9hcmRDb21wb25lbnQuY29uc3RydWN0b3IiLCJEYXNoYm9hcmRDb21wb25lbnQub25Jbml0IiwiRGFzaGJvYXJkQ29tcG9uZW50LmdvVG9BbGJ1bURldGFpbCIsIkRhc2hib2FyZENvbXBvbmVudC5nZXRQb3B1bGFyQWxidW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFpRCxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3JFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLDhCQUEyQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzFELDZCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzFDLDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBRXBEO0lBZ0RJQSw0QkFBb0JBLGFBQTJCQSxFQUFVQSxPQUFlQTtRQUFwREMsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWNBO1FBQVVBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO0lBQ3hFQSxDQUFDQTtJQUVERCxtQ0FBTUEsR0FBTkE7UUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtJQUNqREEsQ0FBQ0E7SUFFREYsNENBQWVBLEdBQWZBLFVBQWdCQSxLQUFZQTtRQUN4QkcsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEscUJBQU1BLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQzFFQSxDQUFDQTtJQUVESCw2Q0FBZ0JBLEdBQWhCQTtRQUFBSSxpQkFPQ0E7UUFOR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQTthQUNoQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsTUFBTUE7bUJBQ1JBLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BO1FBQXBCQSxDQUFvQkEsQ0FDdkJBLENBQUNBO1FBRU5BLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQWxFTEo7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO1lBQ3JCQSxRQUFRQSxFQUFFQSw0ekJBcUJUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSwwV0FtQlJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSw0QkFBWUEsQ0FBRUE7U0FDL0NBLENBQUNBOzsyQkFzQkRBO0lBQURBLHlCQUFDQTtBQUFEQSxDQW5FQSxBQW1FQ0EsSUFBQTtBQXJCWSwwQkFBa0IscUJBcUI5QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0FsYnVtfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHtBbGJ1bVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FsYnVtLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJy4uLy4uL3JvdXRlLmNvbmZpZyc7XG5pbXBvcnQge0FsYnVtU3VtbWFyeX0gZnJvbSAnLi4vYWxidW0vYWxidW0tc3VtbWFyeSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcIj5cbiAgICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgXHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgXHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL3Nzd19sb2dvLnBuZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCI+XG4gICAgICBcdFx0PC9kaXY+XG4gICAgICBcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS00IGNvbC1zbS1vZmZzZXQtNFwiPlxuICAgICAgXHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2FuZ3VsYXJfbG9nby5qcGVnXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGhlaWdodD1cIjE0OFwiIHdpZHRoPVwiMTQ4XCI+XG4gICAgICBcdFx0PC9kaXY+XG4gICAgICBcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2hvbWUtc2hvd2Nhc2UucG5nXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiPlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cImFsYnVtLXNlY3Rpb25cIj5cbiAgICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgXHRcdFx0XHQ8YWxidW0tc3VtbWFyeSAoY2xpY2spPVwiZ29Ub0FsYnVtRGV0YWlsKGFsYnVtKVwiXG4gICAgICBcdFx0XHRcdFx0XHRcdFx0XHQgKm5nLWZvcj1cIiNhbGJ1bSBvZiBhbGJ1bXNcIlxuICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0IFthbGJ1bV09XCJhbGJ1bVwiPlxuICAgICAgXHRcdFx0XHQ8L2FsYnVtLXN1bW1hcnk+XG4gICAgICBcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgIC5qdW1ib3Ryb24ge1xuICAgICAgICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5qdW1ib3Ryb24gcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLmp1bWJvdHJvbi1oZWFkaW5nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cblxuICAgICAgLmp1bWJvdHJvbiAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgICAgIH1cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBBbGJ1bVN1bW1hcnkgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBhbGJ1bXM6IEFsYnVtW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxidW1TZXJ2aWNlOiBBbGJ1bVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGJ1bXMgPSB0aGlzLmdldFBvcHVsYXJBbGJ1bXMoKTtcbiAgICB9XG5cbiAgICBnb1RvQWxidW1EZXRhaWwoYWxidW06IEFsYnVtKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYC8ke1JvdXRlcy5hbGJ1bS5hc31gLCB7IGlkOiBhbGJ1bS5hbGJ1bUlkIH1dKTtcbiAgICB9XG5cbiAgICBnZXRQb3B1bGFyQWxidW1zKCkge1xuICAgICAgICB0aGlzLl9hbGJ1bVNlcnZpY2UuZ2V0UG9wdWxhckFsYnVtcygpXG4gICAgICAgICAgICAudGhlbihhbGJ1bXMgPT5cbiAgICAgICAgICAgICAgICB0aGlzLmFsYnVtcyA9IGFsYnVtc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hbGJ1bXM7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9