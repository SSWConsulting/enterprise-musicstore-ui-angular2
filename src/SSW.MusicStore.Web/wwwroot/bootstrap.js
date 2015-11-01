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
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(app_1.AppComponent),
    angular2_1.provide(http_2.RequestOptions, { useClass: AuthHeaders })
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC50cyJdLCJuYW1lcyI6WyJBdXRoSGVhZGVycyIsIkF1dGhIZWFkZXJzLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF1QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNELHVCQUF3RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFFLG9CQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyw4QkFBMkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN0RCw4QkFBMkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN0RCxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFFMUU7SUFBMEJBLCtCQUFrQkE7SUFBNUNBO1FBQTBCQyw4QkFBa0JBO1FBQ3hDQSxZQUFPQSxHQUFHQSxJQUFJQSxjQUFPQSxDQUFDQTtZQUNsQkEsUUFBUUEsRUFBRUEsa0JBQWtCQTtZQUM1QkEsY0FBY0EsRUFBRUEsa0JBQWtCQTtZQUNsQ0EsZUFBZUEsRUFBRUEsU0FBU0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7U0FDM0RBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBQURELGtCQUFDQTtBQUFEQSxDQU5BLEFBTUNBLEVBTnlCLHlCQUFrQixFQU0zQztBQUNELG9CQUFTLENBQUMsa0JBQVksRUFDbEIsQ0FBQyx5QkFBZ0I7SUFDYixxQkFBYztJQUNkLDRCQUFZO0lBQ1osNEJBQVk7SUFDWix3QkFBZTtJQUNmLGVBQUksQ0FBQyxpQ0FBd0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBWSxDQUFDO0lBQ3BELGtCQUFPLENBQUMscUJBQWMsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQztDQUNyRCxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kLCBib290c3RyYXAsIHByb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Uk9VVEVSX0JJTkRJTkdTLCBST1VURVJfUFJJTUFSWV9DT01QT05FTlR9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0FsYnVtU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9hbGJ1bS5zZXJ2aWNlJztcbmltcG9ydCB7R2VucmVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2dlbnJlLnNlcnZpY2UnO1xuaW1wb3J0IHtIZWFkZXJzLCBCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuY2xhc3MgQXV0aEhlYWRlcnMgZXh0ZW5kcyBCYXNlUmVxdWVzdE9wdGlvbnMge1xuICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ2JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpXG4gICAgfSk7XG59XG5ib290c3RyYXAoQXBwQ29tcG9uZW50LFxuICAgIFtST1VURVJfUFJPVklERVJTLFxuICAgICAgICBIVFRQX1BST1ZJREVSUyxcbiAgICAgICAgR2VucmVTZXJ2aWNlLFxuICAgICAgICBBbGJ1bVNlcnZpY2UsIFxuICAgICAgICBST1VURVJfQklORElOR1MsXG4gICAgICAgIGJpbmQoUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UKS50b1ZhbHVlKEFwcENvbXBvbmVudCksXG4gICAgICAgIHByb3ZpZGUoUmVxdWVzdE9wdGlvbnMsIHsgdXNlQ2xhc3M6IEF1dGhIZWFkZXJzIH0pXG4gICAgXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=