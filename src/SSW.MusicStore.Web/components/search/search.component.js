System.register(['@angular/common', '@angular/core', '@angular/http', '../../services/album/album.service', 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/merge', 'rxjs/add/operator/mapTo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, http_1, album_service_1;
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
            function (album_service_1_1) {
                album_service_1 = album_service_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {}],
        execute: function() {
            Search = (function () {
                function Search(http, albumService) {
                    this.selected = new core_1.EventEmitter();
                    this.clear = new core_1.EventEmitter();
                    this.searchText = new common_1.Control();
                    this.albums = this.searchText.valueChanges
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
                        templateUrl: 'app/components/search/search.component.html',
                        styleUrls: ['app/components/search/search.component.css'],
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgIf],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        pipes: [common_1.AsyncPipe],
                        providers: [album_service_1.AlbumService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, album_service_1.AlbumService])
                ], Search);
                return Search;
            }());
            exports_1("Search", Search);
        }
    }
});
