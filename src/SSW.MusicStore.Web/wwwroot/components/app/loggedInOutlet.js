var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var LoggedInRouterOutlet = (function (_super) {
    __extends(LoggedInRouterOutlet, _super);
    function LoggedInRouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
        _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            '': true,
            'login': true,
            'genres': true,
            'genre': true,
            'album': true
        };
    }
    LoggedInRouterOutlet.prototype.activate = function (instruction) {
        var _this = this;
        this.parentRouter.subscribe(function (value) {
            var url = value.substring(0, value.indexOf('/', 0));
            if (!_this.publicRoutes[url] && !localStorage.getItem('jwt')) {
                _this.parentRouter.navigateByUrl('/login');
            }
        });
        return _super.prototype.activate.call(this, instruction);
    };
    LoggedInRouterOutlet = __decorate([
        angular2_1.Directive({
            selector: 'router-outlet'
        }),
        __param(3, angular2_1.Attribute('name')), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, angular2_1.DynamicComponentLoader, router_1.Router, String])
    ], LoggedInRouterOutlet);
    return LoggedInRouterOutlet;
})(router_1.RouterOutlet);
exports.LoggedInRouterOutlet = LoggedInRouterOutlet;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2xvZ2dlZEluT3V0bGV0LnRzIl0sIm5hbWVzIjpbIkxvZ2dlZEluUm91dGVyT3V0bGV0IiwiTG9nZ2VkSW5Sb3V0ZXJPdXRsZXQuY29uc3RydWN0b3IiLCJMb2dnZWRJblJvdXRlck91dGxldC5hY3RpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUF1RSxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNGLHVCQUF5RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRTNFO0lBRzBDQSx3Q0FBWUE7SUFJbERBLDhCQUFZQSxXQUF1QkEsRUFBRUEsT0FBK0JBLEVBQ2hFQSxhQUFxQkEsRUFBcUJBLFFBQWdCQTtRQUMxREMsa0JBQU1BLFdBQVdBLEVBQUVBLE9BQU9BLEVBQUVBLGFBQWFBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO1FBRXJEQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxhQUFhQSxDQUFDQTtRQUNsQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0E7WUFDaEJBLEVBQUVBLEVBQUVBLElBQUlBO1lBQ1JBLE9BQU9BLEVBQUVBLElBQUlBO1lBQ2JBLFFBQVFBLEVBQUVBLElBQUlBO1lBQ2RBLE9BQU9BLEVBQUVBLElBQUlBO1lBQ2JBLE9BQU9BLEVBQUVBLElBQUlBO1NBQ2hCQSxDQUFDQTtJQUNOQSxDQUFDQTtJQUVERCx1Q0FBUUEsR0FBUkEsVUFBU0EsV0FBaUNBO1FBQTFDRSxpQkFTQ0E7UUFSR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsS0FBS0E7WUFDOUJBLElBQUlBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMURBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1lBQzlDQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxNQUFNQSxDQUFDQSxnQkFBS0EsQ0FBQ0EsUUFBUUEsWUFBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBOUJMRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7U0FDNUJBLENBQUNBO1FBTTZCQSxXQUFDQSxvQkFBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUE7OzZCQXVCaERBO0lBQURBLDJCQUFDQTtBQUFEQSxDQS9CQSxBQStCQ0EsRUE1QnlDLHFCQUFZLEVBNEJyRDtBQTVCWSw0QkFBb0IsdUJBNEJoQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2xvZ2dlZEluT3V0bGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEF0dHJpYnV0ZSwgRWxlbWVudFJlZiwgRHluYW1pY0NvbXBvbmVudExvYWRlcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldCwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAncm91dGVyLW91dGxldCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5Sb3V0ZXJPdXRsZXQgZXh0ZW5kcyBSb3V0ZXJPdXRsZXQge1xuICAgIHB1YmxpY1JvdXRlczogYW55O1xuICAgIHByaXZhdGUgcGFyZW50Um91dGVyOiBSb3V0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgX2xvYWRlcjogRHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICAgICAgX3BhcmVudFJvdXRlcjogUm91dGVyLCBAQXR0cmlidXRlKCduYW1lJykgbmFtZUF0dHI6IHN0cmluZykge1xuICAgICAgICBzdXBlcihfZWxlbWVudFJlZiwgX2xvYWRlciwgX3BhcmVudFJvdXRlciwgbmFtZUF0dHIpO1xuXG4gICAgICAgIHRoaXMucGFyZW50Um91dGVyID0gX3BhcmVudFJvdXRlcjtcbiAgICAgICAgdGhpcy5wdWJsaWNSb3V0ZXMgPSB7XG4gICAgICAgICAgICAnJzogdHJ1ZSxcbiAgICAgICAgICAgICdsb2dpbic6IHRydWUsXG4gICAgICAgICAgICAnZ2VucmVzJzogdHJ1ZSxcbiAgICAgICAgICAgICdnZW5yZSc6IHRydWUsXG4gICAgICAgICAgICAnYWxidW0nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoaW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKSB7XG4gICAgICAgIHRoaXMucGFyZW50Um91dGVyLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdmFsdWUuaW5kZXhPZignLycsIDApKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5wdWJsaWNSb3V0ZXNbdXJsXSAmJiAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRSb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5hY3RpdmF0ZShpbnN0cnVjdGlvbik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9