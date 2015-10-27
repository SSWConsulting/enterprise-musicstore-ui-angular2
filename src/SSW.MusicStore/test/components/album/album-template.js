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
var AlbumTemplate = (function () {
    function AlbumTemplate() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', models_1.Album)
    ], AlbumTemplate.prototype, "album");
    AlbumTemplate = __decorate([
        angular2_1.Component({
            selector: 'album-template',
            styles: ["\n      .ms-album-detail {\n      \tmargin-top: 10px;\n      }\n    "],
            template: "\n      <div class=\"card ms-album-detail\">\n      \t<img class=\"card-img-top\" src=\"/images/placeholder.png\" alt=\"Card image cap\">\n      \t<div class=\"card-block\">\n      \t\t<h4 class=\"card-title\">{{album.title}}</h4>\n      \t\t<div>\n      \t\t\t<label>Artist: </label>{{album.artist}}\n      \t\t</div>\n      \t\t<div>\n      \t\t\t<label>Price: </label>{{album.price | currency}}\n      \t\t</div>\n      \t\t<div>\n      \t\t\t<label>Date: </label>{{album.created}}\n      \t\t</div>\n      \t\t<button class=\"btn btn-primary\" (click)=\"notImplemented()\">Add to cart</button>\n      \t</div>\n      </div>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumTemplate);
    return AlbumTemplate;
})();
exports.AlbumTemplate = AlbumTemplate;
