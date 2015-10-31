var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./components/app/app');
var router_2 = require('angular2/router');
var http_1 = require('angular2/http');
var album_service_1 = require('./services/album.service');
var genre_service_1 = require('./services/genre.service');
var name_list_1 = require('./services/name_list');
var http_2 = require('angular2/http');
var AuthHeaders = (function (_super) {
    __extends(AuthHeaders, _super);
    function AuthHeaders() {
        _super.apply(this, arguments);
        this.headers = new http_2.Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('jwt')
        });
    }
    return AuthHeaders;
})(http_2.BaseRequestOptions);
angular2_1.bootstrap(app_1.AppComponent, [router_2.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    genre_service_1.GenreService,
    album_service_1.AlbumService,
    name_list_1.NameList,
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(app_1.AppComponent),
    angular2_1.bind(http_2.RequestOptions).toClass(AuthHeaders)
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC50cyJdLCJuYW1lcyI6WyJBdXRoSGVhZGVycyIsIkF1dGhIZWFkZXJzLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2xELHVCQUF3RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFFLG9CQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyw4QkFBMkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN0RCw4QkFBMkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN0RCwwQkFBdUIsc0JBQXNCLENBQUMsQ0FBQTtBQUM5QyxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFFMUU7SUFBMEJBLCtCQUFrQkE7SUFBNUNBO1FBQTBCQyw4QkFBa0JBO1FBRXhDQSxZQUFPQSxHQUFHQSxJQUFJQSxjQUFPQSxDQUFDQTtZQUNsQkEsUUFBUUEsRUFBRUEsa0JBQWtCQTtZQUM1QkEsY0FBY0EsRUFBRUEsa0JBQWtCQTtZQUNsQ0EsZUFBZUEsRUFBRUEsU0FBU0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7U0FDM0RBLENBQUNBLENBQUNBO0lBRVBBLENBQUNBO0lBQURELGtCQUFDQTtBQUFEQSxDQVJBLEFBUUNBLEVBUnlCLHlCQUFrQixFQVEzQztBQUNELG9CQUFTLENBQUMsa0JBQVksRUFDbEIsQ0FBQyx5QkFBZ0I7SUFDYixxQkFBYztJQUNkLDRCQUFZO0lBQ1osNEJBQVk7SUFDWixvQkFBUTtJQUNSLHdCQUFlO0lBQ2YsZUFBSSxDQUFDLGlDQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFZLENBQUM7SUFDcEQsZUFBSSxDQUFDLHFCQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0NBQzVDLENBQUMsQ0FBQyIsImZpbGUiOiJib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmQsIGJvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtST1VURVJfQklORElOR1MsIFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7QWxidW1TZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2FsYnVtLnNlcnZpY2UnO1xuaW1wb3J0IHtHZW5yZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZ2VucmUuc2VydmljZSc7XG5pbXBvcnQge05hbWVMaXN0fSBmcm9tICcuL3NlcnZpY2VzL25hbWVfbGlzdCc7XG5pbXBvcnQge0hlYWRlcnMsIEJhc2VSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5jbGFzcyBBdXRoSGVhZGVycyBleHRlbmRzIEJhc2VSZXF1ZXN0T3B0aW9ucyB7XG4gICAgICBcbiAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdiZWFyZXIgJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKVxuICAgIH0pO1xuXG59XG5ib290c3RyYXAoQXBwQ29tcG9uZW50LFxuICAgIFtST1VURVJfUFJPVklERVJTLFxuICAgICAgICBIVFRQX1BST1ZJREVSUyxcbiAgICAgICAgR2VucmVTZXJ2aWNlLFxuICAgICAgICBBbGJ1bVNlcnZpY2UsXG4gICAgICAgIE5hbWVMaXN0LFxuICAgICAgICBST1VURVJfQklORElOR1MsXG4gICAgICAgIGJpbmQoUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UKS50b1ZhbHVlKEFwcENvbXBvbmVudCksXG4gICAgICAgIGJpbmQoUmVxdWVzdE9wdGlvbnMpLnRvQ2xhc3MoQXV0aEhlYWRlcnMpXG4gICAgXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=