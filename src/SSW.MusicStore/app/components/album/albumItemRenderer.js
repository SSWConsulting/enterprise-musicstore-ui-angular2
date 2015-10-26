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
            templateUrl: './components/album/albumItemRenderer.html',
            styleUrls: ['./components/album/albumItemRenderer.css'],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumItemRenderer);
    return AlbumItemRenderer;
})();
exports.AlbumItemRenderer = AlbumItemRenderer;
//# sourceMappingURL=albumItemRenderer.js.map