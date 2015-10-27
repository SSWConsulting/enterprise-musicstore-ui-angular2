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
