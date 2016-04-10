System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LoggedInRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggedInRouterOutlet = (function () {
                function LoggedInRouterOutlet() {
                }
                LoggedInRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'router-outlet'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoggedInRouterOutlet);
                return LoggedInRouterOutlet;
            })();
            exports_1("LoggedInRouterOutlet", LoggedInRouterOutlet);
        }
    }
});
//  extends RouterOutlet {
//     publicRoutes: any;
//     private parentRouter: Router;
//     constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
//         _parentRouter: Router, @Attribute('name') nameAttr: string) {
//         super(_elementRef, _loader, _parentRouter, nameAttr);
//         this.parentRouter = _parentRouter;
//         this.publicRoutes = {
//             '': true,
//             'login': true,
//             'genres': true,
//             'genre': true,
//             'album': true
//         };
//     }
//     activate(instruction: ComponentInstruction) {
//         this.parentRouter.subscribe((value) => {
//             if (value.indexOf('/', 0) >= 0) {
//                 var url = value.substring(0, value.indexOf('/', 0));
//             } else {
//                 url = value;
//             }
//             if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
//                 if (url === 'login') {
//                     this.parentRouter.navigateByUrl('/');
//                 } else {
//                     this.parentRouter.navigateByUrl('/login');
//                 }
//             }
//             scroll(0, 0);
//         });
//         return super.activate(instruction);
//     }
// }
