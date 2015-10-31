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
var album_template_1 = require('./album-template');
var AlbumDetailComponent = (function () {
    function AlbumDetailComponent(_albumService, _routeParams, _router) {
        this._albumService = _albumService;
        this._routeParams = _routeParams;
        this._router = _router;
    }
    AlbumDetailComponent.prototype.onInit = function () {
        if (!this.album) {
            this.id = parseInt(this._routeParams.get('id'));
            this.getAlbum(this.id);
        }
    };
    AlbumDetailComponent.prototype.getAlbum = function (id) {
        var _this = this;
        this._albumService.getAlbum(id)
            .then(function (album) {
            album.created = moment(album.created).format('MMMM, YYYY');
            _this.album = album;
        });
    };
    //TODO: Wire up back to last genre not all genres
    AlbumDetailComponent.prototype.goToGenre = function (album) {
        this._router.navigate([("/" + route_config_1.Routes.genres.as)]);
    };
    AlbumDetailComponent = __decorate([
        angular2_1.Component({
            selector: 'album-detail',
            template: "\n      <div class=\"container\">\n      \t<album-template\n      \t\t[album]=\"album\">\n      \t</album-template>\n      </div>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, album_template_1.AlbumTemplate]
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.RouteParams, router_1.Router])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
})();
exports.AlbumDetailComponent = AlbumDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxidW0vYWxidW0udHMiXSwibmFtZXMiOlsiQWxidW1EZXRhaWxDb21wb25lbnQiLCJBbGJ1bURldGFpbENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFsYnVtRGV0YWlsQ29tcG9uZW50Lm9uSW5pdCIsIkFsYnVtRGV0YWlsQ29tcG9uZW50LmdldEFsYnVtIiwiQWxidW1EZXRhaWxDb21wb25lbnQuZ29Ub0dlbnJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFrRSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3RGLHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXBELDhCQUEyQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzFELDZCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzFDLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBRS9DO0lBZ0JJQSw4QkFBb0JBLGFBQTJCQSxFQUNuQ0EsWUFBeUJBLEVBQVVBLE9BQWVBO1FBRDFDQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBY0E7UUFDbkNBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtRQUFVQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtJQUU5REEsQ0FBQ0E7SUFFREQscUNBQU1BLEdBQU5BO1FBQ0lFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ2RBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hEQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFREYsdUNBQVFBLEdBQVJBLFVBQVNBLEVBQVVBO1FBQW5CRyxpQkFPQ0E7UUFOR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7YUFDMUJBLElBQUlBLENBQUNBLFVBQUFBLEtBQUtBO1lBQ1BBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO1lBQzNEQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUNuQkEsQ0FBQ0EsQ0FDSkEsQ0FBQ0E7SUFDVkEsQ0FBQ0E7SUFFREgsaURBQWlEQTtJQUNqREEsd0NBQVNBLEdBQVRBLFVBQVVBLEtBQVlBO1FBQ2xCSSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFJQSxxQkFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDcERBLENBQUNBO0lBeENMSjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsY0FBY0E7WUFDeEJBLFFBQVFBLEVBQUVBLHlJQU1UQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsRUFBRUEsMEJBQWVBLEVBQUVBLDhCQUFhQSxDQUFDQTtTQUVoRUEsQ0FBQ0E7OzZCQW1DREE7SUFBREEsMkJBQUNBO0FBQURBLENBOUNBLEFBOENDQSxJQUFBO0FBbENZLDRCQUFvQix1QkFrQ2hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0FsYnVtfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHtBbGJ1bVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FsYnVtLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJy4uLy4uL3JvdXRlLmNvbmZpZyc7XG5pbXBvcnQge0FsYnVtVGVtcGxhdGV9IGZyb20gJy4vYWxidW0tdGVtcGxhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FsYnVtLWRldGFpbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIFx0PGFsYnVtLXRlbXBsYXRlXG4gICAgICBcdFx0W2FsYnVtXT1cImFsYnVtXCI+XG4gICAgICBcdDwvYWxidW0tdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgQWxidW1UZW1wbGF0ZV1cbiAgICAvL2lucHV0czogWydhbGJ1bSddXG59KVxuZXhwb3J0IGNsYXNzIEFsYnVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhbGJ1bTogQWxidW07XG4gICAgaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FsYnVtU2VydmljZTogQWxidW1TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBvbkluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hbGJ1bSkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHBhcnNlSW50KHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKSk7XG4gICAgICAgICAgICB0aGlzLmdldEFsYnVtKHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWxidW0oaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hbGJ1bVNlcnZpY2UuZ2V0QWxidW0oaWQpXG4gICAgICAgICAgICAudGhlbihhbGJ1bSA9PiB7XG4gICAgICAgICAgICAgICAgYWxidW0uY3JlYXRlZCA9IG1vbWVudChhbGJ1bS5jcmVhdGVkKS5mb3JtYXQoJ01NTU0sIFlZWVknKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsYnVtID0gYWxidW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL1RPRE86IFdpcmUgdXAgYmFjayB0byBsYXN0IGdlbnJlIG5vdCBhbGwgZ2VucmVzXG4gICAgZ29Ub0dlbnJlKGFsYnVtOiBBbGJ1bSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuZ2VucmVzLmFzfWBdKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBpbXBsZW1lbnQgcm91dGUgdG8gbXZjIHNob3BwaW5nIGNhcnRcbiAgICAvL2dvVG9DYXJ0KCkge1xuICAgIC8vICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuYWxidW0uYXN9YF0pO1xuICAgIC8vfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9