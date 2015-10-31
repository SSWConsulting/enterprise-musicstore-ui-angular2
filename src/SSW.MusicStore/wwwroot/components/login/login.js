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
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var LoginComponent = (function () {
    function LoginComponent(_router) {
        this._router = _router;
    }
    LoginComponent.prototype.onInit = function () {
        //TODO: implement initialisation of component
    };
    LoginComponent.prototype.submit = function () {
        alert(this.email + this.password + this.rememberMe);
    };
    LoginComponent = __decorate([
        angular2_1.Component({
            selector: 'login',
            template: "\n      <div class=\"container\">\n\n      \t<form class=\"form-signin\">\n      \t\t<h2 class=\"form-signin-heading\">Please sign in</h2>\n      \t\t<label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n      \t\t<input type=\"email\" [(ng-model)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n      \t\t<label for=\"inputPassword\"  class=\"sr-only\">Password</label>\n      \t\t<input type=\"password\" [(ng-model)]=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n      \t\t<div class=\"checkbox\">\n      \t\t\t<label>\n      \t\t\t\t<input type=\"checkbox\" [(ng-model)]=\"rememberMe\" value=\"remember-me\"> Remember me\n      \t\t\t</label>\n      \t\t</div>\n      \t\t<button class=\"btn btn-lg btn-primary btn-block\" (click)=\"submit()\" type=\"submit\">Sign in</button>\n      \t</form>\n\n      </div>\n    ",
            styles: ["\n\n    "],
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW5Db21wb25lbnQiLCJMb2dpbkNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkxvZ2luQ29tcG9uZW50Lm9uSW5pdCIsIkxvZ2luQ29tcG9uZW50LnN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBa0UsbUJBQW1CLENBQUMsQ0FBQTtBQUN0Rix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV2QztJQStCSUEsd0JBQW9CQSxPQUFlQTtRQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtJQUNuQ0EsQ0FBQ0E7SUFFREQsK0JBQU1BLEdBQU5BO1FBQ0lFLDZDQUE2Q0E7SUFDakRBLENBQUNBO0lBRURGLCtCQUFNQSxHQUFOQTtRQUNJRyxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtJQUN4REEsQ0FBQ0E7SUF4Q0xIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTtZQUNqQkEsUUFBUUEsRUFBRUEsczVCQWtCVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFFUkEsQ0FBQ0E7WUFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLEVBQUVBLDBCQUFlQSxDQUFDQTtTQUNqREEsQ0FBQ0E7O3VCQWdCREE7SUFBREEscUJBQUNBO0FBQURBLENBekNBLEFBeUNDQSxJQUFBO0FBZlksc0JBQWMsaUJBZTFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuICAgICAgXHQ8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCI+XG4gICAgICBcdFx0PGgyIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPlBsZWFzZSBzaWduIGluPC9oMj5cbiAgICAgIFx0XHQ8bGFiZWwgZm9yPVwiaW5wdXRFbWFpbFwiIGNsYXNzPVwic3Itb25seVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgXHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBbKG5nLW1vZGVsKV09XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgcmVxdWlyZWQgYXV0b2ZvY3VzPlxuICAgICAgXHRcdDxsYWJlbCBmb3I9XCJpbnB1dFBhc3N3b3JkXCIgIGNsYXNzPVwic3Itb25seVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgIFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgWyhuZy1tb2RlbCldPVwicGFzc3dvcmRcIiBpZD1cImlucHV0UGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZD5cbiAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgIFx0XHRcdDxsYWJlbD5cbiAgICAgIFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmctbW9kZWwpXT1cInJlbWVtYmVyTWVcIiB2YWx1ZT1cInJlbWVtYmVyLW1lXCI+IFJlbWVtYmVyIG1lXG4gICAgICBcdFx0XHQ8L2xhYmVsPlxuICAgICAgXHRcdDwvZGl2PlxuICAgICAgXHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIChjbGljayk9XCJzdWJtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj5TaWduIGluPC9idXR0b24+XG4gICAgICBcdDwvZm9ybT5cblxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG5cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGVtYWlsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVtZW1iZXJNZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICAvL1RPRE86IGltcGxlbWVudCBpbml0aWFsaXNhdGlvbiBvZiBjb21wb25lbnRcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGFsZXJ0KHRoaXMuZW1haWwgKyB0aGlzLnBhc3N3b3JkICsgdGhpcy5yZW1lbWJlck1lKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=