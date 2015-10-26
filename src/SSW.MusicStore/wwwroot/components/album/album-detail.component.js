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
            template: "\n    <div class=\"container\">\n    \t<album-detail-renderer\n    \t\t[album]=\"album\">\n    \t</album-detail-renderer>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, albumDetailRenderer_1.AlbumDetailRenderer],
            inputs: ['album']
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.RouteParams, router_1.Router])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
})();
exports.AlbumDetailComponent = AlbumDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxidW0vYWxidW0tZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBbGJ1bURldGFpbENvbXBvbmVudCIsIkFsYnVtRGV0YWlsQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQWxidW1EZXRhaWxDb21wb25lbnQub25Jbml0IiwiQWxidW1EZXRhaWxDb21wb25lbnQuZ2V0QWxidW0iLCJBbGJ1bURldGFpbENvbXBvbmVudC5nb1RvR2VucmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQWtFLG1CQUFtQixDQUFDLENBQUE7QUFDdEYsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsOEJBQTJCLDhCQUE4QixDQUFDLENBQUE7QUFDMUQsNkJBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFDMUMsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFFMUQ7SUFnQkVBLDhCQUFvQkEsYUFBMkJBLEVBQ3JDQSxZQUF5QkEsRUFBVUEsT0FBZUE7UUFEeENDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFjQTtRQUNyQ0EsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO1FBQVVBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO0lBQzVEQSxDQUFDQTtJQUVERCxxQ0FBTUEsR0FBTkE7UUFDRUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUM3Q0EsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFREYsdUNBQVFBLEdBQVJBLFVBQVNBLEVBQVVBO1FBQW5CRyxpQkFRQ0E7UUFQR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7YUFDMUJBLElBQUlBLENBQUNBLFVBQUFBLEtBQUtBO1lBQ1BBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO1lBQzNEQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUN2QkEsQ0FBQ0EsQ0FDSkEsQ0FBQ0E7UUFDRkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBRUFILGlEQUFpREE7SUFDbERBLHdDQUFTQSxHQUFUQSxVQUFVQSxLQUFXQTtRQUNqQkksSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBSUEscUJBQU1BLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3BEQSxDQUFDQTtJQXhDSEo7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGNBQWNBO1lBQ3hCQSxRQUFRQSxFQUFFQSwySUFNVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLEVBQUVBLDBCQUFlQSxFQUFFQSx5Q0FBbUJBLENBQUNBO1lBQ25FQSxNQUFNQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTtTQUNsQkEsQ0FBQ0E7OzZCQW1DREE7SUFBREEsMkJBQUNBO0FBQURBLENBOUNBLEFBOENDQSxJQUFBO0FBbENZLDRCQUFvQix1QkFrQ2hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QWxidW19IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQge0FsYnVtU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWxidW0uc2VydmljZSc7XG5pbXBvcnQge1JvdXRlc30gZnJvbSAnLi4vLi4vcm91dGUuY29uZmlnJztcbmltcG9ydCB7QWxidW1EZXRhaWxSZW5kZXJlcn0gZnJvbSAnLi9hbGJ1bURldGFpbFJlbmRlcmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWxidW0tZGV0YWlsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXHQ8YWxidW0tZGV0YWlsLXJlbmRlcmVyXG4gICAgXHRcdFthbGJ1bV09XCJhbGJ1bVwiPlxuICAgIFx0PC9hbGJ1bS1kZXRhaWwtcmVuZGVyZXI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgQWxidW1EZXRhaWxSZW5kZXJlcl0sXG4gIGlucHV0czogWydhbGJ1bSddXG59KVxuZXhwb3J0IGNsYXNzIEFsYnVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhbGJ1bTogQWxidW07XG4gICAgaWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGJ1bVNlcnZpY2U6IEFsYnVtU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBvbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmFsYnVtKSB7XG4gICAgICB0aGlzLmlkID0gcGFyc2VJbnQodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpKTtcbiAgICAgIHJldHVybiB0aGlzLmFsYnVtID0gdGhpcy5nZXRBbGJ1bSh0aGlzLmlkKTtcbiAgICB9XG4gIH1cblxuICBnZXRBbGJ1bShpZDogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9hbGJ1bVNlcnZpY2UuZ2V0QWxidW0oaWQpXG4gICAgICAgICAgLnRoZW4oYWxidW0gPT4ge1xuICAgICAgICAgICAgICBhbGJ1bS5jcmVhdGVkID0gbW9tZW50KGFsYnVtLmNyZWF0ZWQpLmZvcm1hdCgnTU1NTSwgWVlZWScpO1xuICAgICAgICAgICAgICB0aGlzLmFsYnVtID0gYWxidW07XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmFsYnVtO1xuICB9XG5cbiAgIC8vVE9ETzogV2lyZSB1cCBiYWNrIHRvIGxhc3QgZ2VucmUgbm90IGFsbCBnZW5yZXNcbiAgZ29Ub0dlbnJlKGFsYnVtOkFsYnVtKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2AvJHtSb3V0ZXMuZ2VucmVzLmFzfWBdKTtcbiAgfVxuXG4gIC8vIFRPRE86IGltcGxlbWVudCByb3V0ZSB0byBtdmMgc2hvcHBpbmcgY2FydFxuICAvL2dvVG9DYXJ0KCkge1xuICAvLyAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgLyR7Um91dGVzLmFsYnVtLmFzfWBdKTtcbiAgLy99XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=