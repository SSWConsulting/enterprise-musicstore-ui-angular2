var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var dashboard_component_1 = require('./dashboard.component');
exports.Routes = {
    dashboard: {
        path: '/',
        as: 'Dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    heroes: {
        path: '/heroes',
        as: 'Heroes',
        component: heroes_component_1.HeroesComponent
    },
    detail: {
        path: '/detail/:id',
        as: 'Detail',
        component: hero_detail_component_1.HeroDetailComponent
    }
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
//# sourceMappingURL=route.config.js.map