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
    //private email: string;
    //private password: string;
    //private rememberMe: boolean;
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.onInit = function () {
        //TODO: implement initialisation of component
    };
    LoginComponent.prototype.login = function () {
        // Initialize Auth0Lock with your `clientID` and `domain`
        var lock = new Auth0Lock('ikMjOLanjOske624faAjYe0Ve7cAOg33', 'ssw.au.auth0.com');
        lock.show({
            focusInput: false,
            popup: true,
        }, function (err, profile, token) {
            if (err)
                console.log('login error:', err);
            if (token)
                localStorage.setItem('jwt', token);
            if (profile)
                localStorage.setItem('user', JSON.stringify(profile));
        });
    };
    //login(event, username, password) {
    //    event.preventDefault();
    //    window.fetch('http://localhost:3001/sessions/create', {
    //        method: 'POST',
    //        headers: {
    //            'Accept': 'application/json',
    //            'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify({
    //            username, password
    //        })
    //    })
    //        .then(status)
    //        .then(json)
    //        .then((response: any) => {
    //            localStorage.setItem('jwt', response.id_token);
    //            this.router.parent.navigateByUrl('/home');
    //        })
    //        .catch((error) => {
    //            alert(error.message);
    //            console.log(error.message);
    //        });
    //}
    LoginComponent.prototype.signup = function (event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    };
    LoginComponent = __decorate([
        angular2_1.Component({
            selector: 'login',
            template: "\n      <div class=\"container\">\n      \t<form role=\"form\" (submit)=\"login($event, username.value, password.value)\">\n      \t\t<div class=\"form-group\">\n      \t\t\t<label for=\"username\">Username</label>\n      \t\t\t<input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n      \t\t</div>\n      \t\t<div class=\"form-group\">\n      \t\t\t<label for=\"password\">Password</label>\n      \t\t\t<input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n      \t\t</div>\n      \t\t<button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      \t\t<a href=\"/signup\">Click here to Signup</a>\n      \t</form>\n      </div>\n      <button class=\"btn btn-lg\" (click)=\"login()\" >Sign in</button>\n      \t<!--<form class=\"form-signin\">\n      \t\t<h2 class=\"form-signin-heading\">Please sign in</h2>\n      \t\t<label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n      \t\t<input type=\"email\" [(ng-model)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n      \t\t<label for=\"inputPassword\" class=\"sr-only\">Password</label>\n      \t\t<input type=\"password\" [(ng-model)]=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n      \t\t<div class=\"checkbox\">\n      \t\t\t<label>\n      \t\t\t\t<input type=\"checkbox\" [(ng-model)]=\"rememberMe\" value=\"remember-me\"> Remember me\n      \t\t\t</label>\n      \t\t</div>\n      \t\t<button class=\"btn btn-lg btn-primary btn-block\" (click)=\"submit()\" type=\"submit\">Sign in</button>\n      \t</form>-->\n    ",
            styles: ["\n\n    "],
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
