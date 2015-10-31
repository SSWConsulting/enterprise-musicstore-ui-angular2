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
var AlbumSummary = (function () {
    function AlbumSummary() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', models_1.Album)
    ], AlbumSummary.prototype, "album");
    AlbumSummary = __decorate([
        angular2_1.Component({
            selector: 'album-summary',
            template: "\n      <div class=\"card\">\n      \t<img src=\"/images/placeholder.png\" class=\"img-responsive\" alt=\"Album cover image\" width=\"150\" height=\"150\">\n      \t<h4>{{album.title}}</h4>\n      </div>\n    ",
            styles: ["\n      .card:hover {\n      \tcursor: pointer;\t\n      }\n\n      .card {\n        float: left;\n        width: 32%;\n        padding: .75rem;\n        margin: 0.25rem;\n        background-color: #fff;\n      }\n\n      .card > img {\n        margin-bottom: .75rem;\n      }\n\n      .card-text {\n        font-size: 75%;\n      }\n    "],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumSummary);
    return AlbumSummary;
})();
exports.AlbumSummary = AlbumSummary;
