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
            template: "\n      <div class=\"card ms-album-detail\">\n      \t<img class=\"card-img-top\" src=\"/images/placeholder.png\" alt=\"Card image cap\">\n      \t<div class=\"card-block\">\n      \t\t<h4 class=\"card-title\">{{album?.title}}</h4>\n      \t\t<div>\n      \t\t\t<label>Artist: </label>{{album?.artist}}\n      \t\t</div>\n      \t\t<div>\n      \t\t\t<label>Price: </label>{{album?.price | currency}}\n      \t\t</div>\n      \t\t<div>\n      \t\t\t<label>Date: </label>{{album?.created}}\n      \t\t</div>\n      \t\t<button class=\"btn btn-primary\" (click)=\"notImplemented()\">Add to cart</button>\n      \t</div>\n      </div>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumTemplate);
    return AlbumTemplate;
})();
exports.AlbumTemplate = AlbumTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxidW0vYWxidW0tdGVtcGxhdGUudHMiXSwibmFtZXMiOlsiQWxidW1UZW1wbGF0ZSIsIkFsYnVtVGVtcGxhdGUuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQWdELG1CQUFtQixDQUFDLENBQUE7QUFDcEUsdUJBQW9CLGNBQWMsQ0FBQyxDQUFBO0FBRW5DO0lBQUFBO0lBOEJBQyxDQUFDQTtJQURHRDtRQUFDQSxnQkFBS0EsRUFBRUE7O09BQUNBLGdDQUFLQSxFQUFRQTtJQTdCMUJBO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO1lBQzFCQSxNQUFNQSxFQUFFQSxDQUFDQSxzRUFJUkEsQ0FBQ0E7WUFDRkEsUUFBUUEsRUFBRUEsK25CQWlCVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLENBQUNBO1NBQ2hDQSxDQUFDQTs7c0JBSURBO0lBQURBLG9CQUFDQTtBQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtBQUZZLHFCQUFhLGdCQUV6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWxidW0vYWxidW0tdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ09SRV9ESVJFQ1RJVkVTLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtBbGJ1bX0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhbGJ1bS10ZW1wbGF0ZScsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgLm1zLWFsYnVtLWRldGFpbCB7XG4gICAgICBcdG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1zLWFsYnVtLWRldGFpbFwiPlxuICAgICAgXHQ8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiPlxuICAgICAgXHQ8ZGl2IGNsYXNzPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgXHRcdDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj57e2FsYnVtPy50aXRsZX19PC9oND5cbiAgICAgIFx0XHQ8ZGl2PlxuICAgICAgXHRcdFx0PGxhYmVsPkFydGlzdDogPC9sYWJlbD57e2FsYnVtPy5hcnRpc3R9fVxuICAgICAgXHRcdDwvZGl2PlxuICAgICAgXHRcdDxkaXY+XG4gICAgICBcdFx0XHQ8bGFiZWw+UHJpY2U6IDwvbGFiZWw+e3thbGJ1bT8ucHJpY2UgfCBjdXJyZW5jeX19XG4gICAgICBcdFx0PC9kaXY+XG4gICAgICBcdFx0PGRpdj5cbiAgICAgIFx0XHRcdDxsYWJlbD5EYXRlOiA8L2xhYmVsPnt7YWxidW0/LmNyZWF0ZWR9fVxuICAgICAgXHRcdDwvZGl2PlxuICAgICAgXHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwibm90SW1wbGVtZW50ZWQoKVwiPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICBcdDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEFsYnVtVGVtcGxhdGUge1xuICAgIEBJbnB1dCgpIGFsYnVtOiBBbGJ1bTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==