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
            return this.album = this.getAlbum(this.id);
        }
    };
    AlbumDetailComponent.prototype.getAlbum = function (id) {
        var _this = this;
        this._albumService.getAlbum(id)
            .then(function (album) {
            album.created = moment(album.created).format('MMMM, YYYY');
            _this.album = album;
        });
        return this.album;
    };
    //TODO: Wire up back to last genre not all genres
    AlbumDetailComponent.prototype.goToGenre = function (album) {
        this._router.navigate([("/" + route_config_1.Routes.genres.as)]);
    };
    AlbumDetailComponent = __decorate([
        angular2_1.Component({
            selector: 'album-detail',
            template: "\n    <div class=\"container\">\n    \t<album-template\n    \t\t[album]=\"album\">\n    \t</album-template>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, album_template_1.AlbumTemplate],
            inputs: ['album']
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.RouteParams, router_1.Router])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
})();
exports.AlbumDetailComponent = AlbumDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxidW0vYWxidW0udHMiXSwibmFtZXMiOlsiQWxidW1EZXRhaWxDb21wb25lbnQiLCJBbGJ1bURldGFpbENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFsYnVtRGV0YWlsQ29tcG9uZW50Lm9uSW5pdCIsIkFsYnVtRGV0YWlsQ29tcG9uZW50LmdldEFsYnVtIiwiQWxidW1EZXRhaWxDb21wb25lbnQuZ29Ub0dlbnJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFrRSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3RGLHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXBELDhCQUEyQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzFELDZCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzFDLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBRS9DO0lBZ0JFQSw4QkFBb0JBLGFBQTJCQSxFQUNyQ0EsWUFBeUJBLEVBQVVBLE9BQWVBO1FBRHhDQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBY0E7UUFDckNBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtRQUFVQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtJQUM1REEsQ0FBQ0E7SUFFREQscUNBQU1BLEdBQU5BO1FBQ0VFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDN0NBLENBQUNBO0lBQ0hBLENBQUNBO0lBRURGLHVDQUFRQSxHQUFSQSxVQUFTQSxFQUFVQTtRQUFuQkcsaUJBUUNBO1FBUEdBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLEVBQUVBLENBQUNBO2FBQzFCQSxJQUFJQSxDQUFDQSxVQUFBQSxLQUFLQTtZQUNQQSxLQUFLQSxDQUFDQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtZQUMzREEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQ0pBLENBQUNBO1FBQ0ZBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO0lBQ3RCQSxDQUFDQTtJQUVBSCxpREFBaURBO0lBQ2xEQSx3Q0FBU0EsR0FBVEEsVUFBVUEsS0FBV0E7UUFDakJJLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLE9BQUlBLHFCQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNwREEsQ0FBQ0E7SUF4Q0hKO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxjQUFjQTtZQUN4QkEsUUFBUUEsRUFBRUEsNkhBTVRBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSwwQkFBZUEsRUFBRUEsOEJBQWFBLENBQUNBO1lBQzdEQSxNQUFNQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTtTQUNsQkEsQ0FBQ0E7OzZCQW1DREE7SUFBREEsMkJBQUNBO0FBQURBLENBOUNBLEFBOENDQSxJQUFBO0FBbENZLDRCQUFvQix1QkFrQ2hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0FsYnVtfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHtBbGJ1bVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FsYnVtLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJy4uLy4uL3JvdXRlLmNvbmZpZyc7XG5pbXBvcnQge0FsYnVtVGVtcGxhdGV9IGZyb20gJy4vYWxidW0tdGVtcGxhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbGJ1bS1kZXRhaWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICBcdDxhbGJ1bS10ZW1wbGF0ZVxuICAgIFx0XHRbYWxidW1dPVwiYWxidW1cIj5cbiAgICBcdDwvYWxidW0tdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgQWxidW1UZW1wbGF0ZV0sXG4gIGlucHV0czogWydhbGJ1bSddXG59KVxuZXhwb3J0IGNsYXNzIEFsYnVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhbGJ1bTogQWxidW07XG4gICAgaWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGJ1bVNlcnZpY2U6IEFsYnVtU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBvbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmFsYnVtKSB7XG4gICAgICB0aGlzLmlkID0gcGFyc2VJbnQodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpKTtcbiAgICAgIHJldHVybiB0aGlzLmFsYnVtID0gdGhpcy5nZXRBbGJ1bSh0aGlzLmlkKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGJ1bShpZDogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9hbGJ1bVNlcnZpY2UuZ2V0QWxidW0oaWQpXG4gICAgICAgICAgLnRoZW4oYWxidW0gPT4ge1xuICAgICAgICAgICAgICBhbGJ1bS5jcmVhdGVkID0gbW9tZW50KGFsYnVtLmNyZWF0ZWQpLmZvcm1hdCgnTU1NTSwgWVlZWScpO1xuICAgICAgICAgICAgICB0aGlzLmFsYnVtID0gYWxidW07XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmFsYnVtO1xuICB9XG5cbiAgIC8vVE9ETzogV2lyZSB1cCBiYWNrIHRvIGxhc3QgZ2VucmUgbm90IGFsbCBnZW5yZXNcbiAgZ29Ub0dlbnJlKGFsYnVtOkFsYnVtKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuZ2VucmVzLmFzfWBdKTtcbiAgfVxuXG4gIC8vIFRPRE86IGltcGxlbWVudCByb3V0ZSB0byBtdmMgc2hvcHBpbmcgY2FydFxuICAvL2dvVG9DYXJ0KCkge1xuICAvLyAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmFsYnVtLmFzfWBdKTtcbiAgLy99XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=