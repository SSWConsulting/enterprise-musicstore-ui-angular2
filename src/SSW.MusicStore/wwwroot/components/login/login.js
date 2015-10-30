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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW5Db21wb25lbnQiLCJMb2dpbkNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkxvZ2luQ29tcG9uZW50Lm9uSW5pdCIsIkxvZ2luQ29tcG9uZW50LnN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBa0UsbUJBQW1CLENBQUMsQ0FBQTtBQUN0Rix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd2QztJQStCSUEsd0JBQW9CQSxPQUFlQTtRQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtJQUNuQ0EsQ0FBQ0E7SUFFREQsK0JBQU1BLEdBQU5BO0lBQ0FFLENBQUNBO0lBRURGLCtCQUFNQSxHQUFOQTtRQUNJRyxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFBQTtJQUN2REEsQ0FBQ0E7SUF2Q0xIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTtZQUNqQkEsUUFBUUEsRUFBRUEsczVCQWtCVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFFUkEsQ0FBQ0E7WUFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLEVBQUVBLDBCQUFlQSxDQUFDQTtTQUNqREEsQ0FBQ0E7O3VCQWVEQTtJQUFEQSxxQkFBQ0E7QUFBREEsQ0F4Q0EsQUF3Q0NBLElBQUE7QUFkWSxzQkFBYyxpQkFjMUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJy4uLy4uL3JvdXRlLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cbiAgICAgIFx0PGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiPlxuICAgICAgXHRcdDxoMiBjbGFzcz1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj5QbGVhc2Ugc2lnbiBpbjwvaDI+XG4gICAgICBcdFx0PGxhYmVsIGZvcj1cImlucHV0RW1haWxcIiBjbGFzcz1cInNyLW9ubHlcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgIFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgWyhuZy1tb2RlbCldPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIHJlcXVpcmVkIGF1dG9mb2N1cz5cbiAgICAgIFx0XHQ8bGFiZWwgZm9yPVwiaW5wdXRQYXNzd29yZFwiICBjbGFzcz1cInNyLW9ubHlcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICBcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFsobmctbW9kZWwpXT1cInBhc3N3b3JkXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgICBcdFx0PGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICBcdFx0XHQ8bGFiZWw+XG4gICAgICBcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nLW1vZGVsKV09XCJyZW1lbWJlck1lXCIgdmFsdWU9XCJyZW1lbWJlci1tZVwiPiBSZW1lbWJlciBtZVxuICAgICAgXHRcdFx0PC9sYWJlbD5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiAoY2xpY2spPVwic3VibWl0KClcIiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgXHQ8L2Zvcm0+XG5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuXG4gICAgYF0sXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBlbWFpbDogc3RyaW5nO1xuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBwcml2YXRlIHJlbWVtYmVyTWU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG9uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGFsZXJ0KHRoaXMuZW1haWwgKyB0aGlzLnBhc3N3b3JkICsgdGhpcy5yZW1lbWJlck1lKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==