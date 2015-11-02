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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxidW0vYWxidW0tc3VtbWFyeS50cyJdLCJuYW1lcyI6WyJBbGJ1bVN1bW1hcnkiLCJBbGJ1bVN1bW1hcnkuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQWdELG1CQUFtQixDQUFDLENBQUE7QUFDcEUsdUJBQW9CLGNBQWMsQ0FBQyxDQUFBO0FBRW5DO0lBQUFBO0lBa0NBQyxDQUFDQTtJQURHRDtRQUFDQSxnQkFBS0EsRUFBRUE7O09BQUNBLCtCQUFLQSxFQUFRQTtJQWpDMUJBO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTtZQUN6QkEsUUFBUUEsRUFBRUEsbU5BS1RBO1lBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLG9WQW9CUkEsQ0FBQ0E7WUFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLENBQUNBO1NBQ2hDQSxDQUFDQTs7cUJBSURBO0lBQURBLG1CQUFDQTtBQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS1zdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENPUkVfRElSRUNUSVZFUywgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7QWxidW19IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWxidW0tc3VtbWFyeScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICBcdDxpbWcgc3JjPVwiL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgYWx0PVwiQWxidW0gY292ZXIgaW1hZ2VcIiB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgXHQ8aDQ+e3thbGJ1bS50aXRsZX19PC9oND5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgXHRjdXJzb3I6IHBvaW50ZXI7XHRcbiAgICAgIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDMyJTtcbiAgICAgICAgcGFkZGluZzogLjc1cmVtO1xuICAgICAgICBtYXJnaW46IDAuMjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkID4gaW1nIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICB9XG4gICAgYF0sXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbGJ1bVN1bW1hcnkgIHtcbiAgICBASW5wdXQoKSBhbGJ1bTogQWxidW07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=