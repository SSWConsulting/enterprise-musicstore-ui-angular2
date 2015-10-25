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
var album_service_1 = require('./album.service');
var route_config_1 = require('./route.config');
var albumDetailRenderer_1 = require('./albumDetailRenderer');
var AlbumDetailComponent = (function () {
    function AlbumDetailComponent(_albumService, _routeParams, _router) {
        this._albumService = _albumService;
        this._routeParams = _routeParams;
        this._router = _router;
    }
    AlbumDetailComponent.prototype.onInit = function () {
        if (!this.album) {
            this.id = parseInt(this._routeParams.get('id'));
            return this.album = this.getAlbum(this.id);
        }
    };
    AlbumDetailComponent.prototype.getAlbum = function (id) {
        var _this = this;
        return this._albumService.getAlbum(id)
            .then(function (album) {
            album.created = moment(album.created).format('MMMM, YYYY');
            _this.album = album;
        });
        //TODO: why date pipe failing ?
        return this.album;
    };
    //TODO: Wire up back to last genre not all genres
    AlbumDetailComponent.prototype.goToGenre = function (album) {
        this._router.navigate([("/" + route_config_1.Routes.genres.as)]);
    };
    AlbumDetailComponent = __decorate([
        angular2_1.Component({
            selector: 'album-detail',
            templateUrl: 'app/album-detail.component.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, albumDetailRenderer_1.AlbumDetailRenderer],
            inputs: ['album']
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.RouteParams, router_1.Router])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
})();
exports.AlbumDetailComponent = AlbumDetailComponent;
//# sourceMappingURL=album-detail.component.js.map