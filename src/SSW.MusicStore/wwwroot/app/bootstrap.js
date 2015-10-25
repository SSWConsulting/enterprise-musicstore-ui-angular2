var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_component_1 = require('./app.component');
var http_1 = require('angular2/http');
var album_service_1 = require('./album.service');
var genre_service_1 = require('./genre.service');
angular2_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, genre_service_1.GenreService, album_service_1.AlbumService]);
//# sourceMappingURL=bootstrap.js.map