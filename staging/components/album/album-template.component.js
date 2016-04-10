System.register(['angular2/core', 'angular2/common', '../../models', './../login/login-button.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, models_1, login_button_component_1;
    var AlbumTemplate;
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
            },
            function (login_button_component_1_1) {
                login_button_component_1 = login_button_component_1_1;
            }],
        execute: function() {
            AlbumTemplate = (function () {
                function AlbumTemplate() {
                    this.selected = new core_1.EventEmitter();
                    this.loginMessage = 'Login to add to cart';
                }
                AlbumTemplate.prototype.onSelect = function (album) {
                    this.selected.next(album);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', models_1.Album)
                ], AlbumTemplate.prototype, "album", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', models_1.User)
                ], AlbumTemplate.prototype, "user", void 0);
                __decorate([
                    core_1.Output('selected'), 
                    __metadata('design:type', Object)
                ], AlbumTemplate.prototype, "selected", void 0);
                AlbumTemplate = __decorate([
                    core_1.Component({
                        selector: 'album-template',
                        styles: ["\n                          .ms-album-detail {\n                            margin-top: 10px;\n                            background-color:#fff;\n                          }\n                        "],
                        template: "\n                          <div class=\"card ms-album-detail\">\n                            <img class=\"card-img-top\" src=\"app/assets/img/placeholder.png\" alt=\"Card image cap\">\n                            <div class=\"card-block\">\n                                <h4 class=\"card-title\">{{album?.title}}</h4>\n                                <div>\n                                    <label>Price: </label>{{album?.price | currency}}\n                                </div>\n                                <div>\n                                    <label>Date: </label> {{album?.created | date}}\n                                </div>\n                                <button [hidden]=\"!user\" class=\"btn btn-danger\" (click)=\"onSelect(album)\">Add to cart</button>\n                                <login-button [loginMessage]=\"loginMessage\" [hidden]=\"user\">Login to add to cart</login-button>\n                            </div>\n                          </div>\n                        ",
                        directives: [common_1.CORE_DIRECTIVES, login_button_component_1.LoginButtonComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumTemplate);
                return AlbumTemplate;
            })();
            exports_1("AlbumTemplate", AlbumTemplate);
        }
    }
});
