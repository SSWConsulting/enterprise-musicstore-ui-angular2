var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./app');
var http_1 = require('angular2/http');
var heroes_service_1 = require('./heroes.service');
angular2_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, heroes_service_1.HeroesService]);
//# sourceMappingURL=bootstrap.js.map