System.register(['angular2/core', 'angular2/common', '../../models'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, models_1;
    var AlbumSummary;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            }],
        execute: function() {
            AlbumSummary = (function () {
                function AlbumSummary() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', models_1.Album)
                ], AlbumSummary.prototype, "album", void 0);
                AlbumSummary = __decorate([
                    core_1.Component({
                        selector: 'album-summary',
                        template: "\n                          <div class=\"card\">\n                            <img src=\"/app/assets/img/placeholder.png\" class=\"img-responsive\" alt=\"Album cover image\" width=\"150\" height=\"150\">\n                            <h4>{{album.title}}</h4>\n                          </div>\n                        ",
                        styles: ["\n                          .card:hover {\n                            cursor: pointer;\n                          }\n\n                          .card {\n                            float: left;\n                            width: 32%;\n                            padding: .75rem;\n                            margin: 0.25rem;\n                            background-color: #fff;\n                          }\n\n                          .card > img {\n                            margin-bottom: .75rem;\n                          }\n\n                          .card-text {\n                            font-size: 75%;\n                          }\n                        "],
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumSummary);
                return AlbumSummary;
            })();
            exports_1("AlbumSummary", AlbumSummary);
        }
    }
});
