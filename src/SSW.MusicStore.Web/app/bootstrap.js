var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./components/app/app');
var router_2 = require('angular2/router');
var http_1 = require('angular2/http');
var album_service_1 = require('./services/album.service');
var genre_service_1 = require('./services/genre.service');
var name_list_1 = require('./services/name_list');
angular2_1.bootstrap(app_1.AppComponent, [router_2.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    genre_service_1.GenreService,
    album_service_1.AlbumService,
    name_list_1.NameList,
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(app_1.AppComponent)
]);
//# sourceMappingURL=bootstrap.js.map