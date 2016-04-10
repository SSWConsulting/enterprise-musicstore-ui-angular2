System.register(['angular2/common', 'angular2/core', 'angular2/http', 'rxjs/Rx', '../../services/album/album.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, http_1, Rx_1, album_service_1;
    var Search;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (album_service_1_1) {
                album_service_1 = album_service_1_1;
            }],
        execute: function() {
            Search = (function () {
                function Search(http, albumService) {
                    this.selected = new core_1.EventEmitter();
                    this.clear = new core_1.EventEmitter();
                    this.searchText = new common_1.Control();
                    this.albums = Rx_1.Observable.from(this.searchText.valueChanges)
                        .debounceTime(500)
                        .distinctUntilChanged()
                        .switchMap(function (val) { return albumService.search(val); })
                        .merge(this.clear.mapTo([]));
                }
                Search.prototype.onSelect = function (album) {
                    this.selected.next(album);
                    this.clear.next('');
                };
                __decorate([
                    core_1.Output('selected'), 
                    __metadata('design:type', Object)
                ], Search.prototype, "selected", void 0);
                Search = __decorate([
                    core_1.Component({
                        selector: 'search',
                        template: "\n                          <div class=\"input-group ms-search\">\n                            <input \n                                     id=\"search\" \n                                     type=\"text\"\n                                   class=\"form-control\"\n                                   placeholder=\"Search for genre...\"\n                                   #genre [ngFormControl]=\"searchText\">\n                          </div>\n                          <table class=\"table table-bordered\">\n                            <tbody>\n                                <tr class=\"ms-search-result\" *ngFor=\"#album of albums | async\">\n                                    <td>\n                                        <img src=\"app/assets/img/placeholder.png\" class=\"img-responsive\" height=\"45\" width=\"45\">\n                                        <span>{{album.title}}</span>\n                                        <button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"onSelect(album)\">Go to album</button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                          </table>\n                        ",
                        styles: ["\n\n\n                          .ms-search-results .dropdown-item {\n                            padding-left: .75rem;\n                            padding-right: .75rem;\n                          }\n\n                          .ms-search-results .ms-search-item:first-child {\n                            margin-top: .25rem;\n                          }\n\n                          .ms-search {\n                            width: 100%;\n                          }\n\n                            .ms-search .form-control {\n                                height: 100px;\n                                font-size: 60px;\n                                background-color: #fff;\n                                background-color: rgba(207, 70, 67, 0.7 );\n                                color: white;\n                                border: 0;\n                            }\n\n                          .form-control::-webkit-input-placeholder {\n                            color: white;\n                          }\n\n                          .form-control:-moz-placeholder {\n                            color: white;\n                          }\n\n                          .form-control::-moz-placeholder {\n                            color: white;\n                          }\n\n                          .form-control:-ms-input-placeholder {\n                            color: white\n                          }\n\n                          .ms-search-result {\n                            background-color: #fff;\n                          }\n\n                          .ms-search-result .img-responsive {\n                            display: inline;\n                          }\n\n                          .ms-search-result {\n                            font-size: 25px;\n                          }\n\n                          .ms-search-result .btn {\n                            display: none;\n                          }\n\n                          .ms-search-result:hover .btn {\n                            display: inline;\n                          }\n\n                          .ms-search-result:hover {\n                            background-color: #ededed\n                          }\n                        "],
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgIf],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        pipes: [common_1.AsyncPipe],
                        providers: [album_service_1.AlbumService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, album_service_1.AlbumService])
                ], Search);
                return Search;
            })();
            exports_1("Search", Search);
        }
    }
});
