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
var AlbumDetailRenderer = (function () {
    function AlbumDetailRenderer() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', models_1.Album)
    ], AlbumDetailRenderer.prototype, "album");
    AlbumDetailRenderer = __decorate([
        angular2_1.Component({
            selector: 'album-detail-renderer',
            template: './components/album/albumDetailRenderer.html',
            styles: ["\n      .ms-album-detail {\n      \tmargin-top: 10px;\n      }\n    "],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumDetailRenderer);
    return AlbumDetailRenderer;
})();
exports.AlbumDetailRenderer = AlbumDetailRenderer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxidW0vYWxidW1EZXRhaWxSZW5kZXJlci50cyJdLCJuYW1lcyI6WyJBbGJ1bURldGFpbFJlbmRlcmVyIiwiQWxidW1EZXRhaWxSZW5kZXJlci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBb0IsY0FBYyxDQUFDLENBQUE7QUFFbkM7SUFBQUE7SUFhQUMsQ0FBQ0E7SUFER0Q7UUFBQ0EsZ0JBQUtBLEVBQUVBOztPQUFDQSxzQ0FBS0EsRUFBUUE7SUFaMUJBO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSx1QkFBdUJBO1lBQ2pDQSxRQUFRQSxFQUFFQSw2Q0FBNkNBO1lBQ3ZEQSxNQUFNQSxFQUFFQSxDQUFDQSxzRUFJUkEsQ0FBQ0E7WUFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLENBQUNBO1NBQ2hDQSxDQUFDQTs7NEJBSURBO0lBQURBLDBCQUFDQTtBQUFEQSxDQWJBLEFBYUNBLElBQUE7QUFGWSwyQkFBbUIsc0JBRS9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hbGJ1bS9hbGJ1bURldGFpbFJlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENPUkVfRElSRUNUSVZFUywgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7QWxidW19IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWxidW0tZGV0YWlsLXJlbmRlcmVyJyxcbiAgICB0ZW1wbGF0ZTogJy4vY29tcG9uZW50cy9hbGJ1bS9hbGJ1bURldGFpbFJlbmRlcmVyLmh0bWwnLFxuICAgIHN0eWxlczogW2BcbiAgICAgIC5tcy1hbGJ1bS1kZXRhaWwge1xuICAgICAgXHRtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgIGBdLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgQWxidW1EZXRhaWxSZW5kZXJlciB7XG4gICAgQElucHV0KCkgYWxidW06IEFsYnVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9