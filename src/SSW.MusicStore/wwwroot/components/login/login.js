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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW5Db21wb25lbnQiLCJMb2dpbkNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkxvZ2luQ29tcG9uZW50Lm9uSW5pdCIsIkxvZ2luQ29tcG9uZW50LmxvZ2luIiwiTG9naW5Db21wb25lbnQuc2lnbnVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFrRSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3RGLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBR3ZDO0lBeUNJQSx3QkFBd0JBO0lBQ3hCQSwyQkFBMkJBO0lBQzNCQSw4QkFBOEJBO0lBRzlCQSx3QkFBb0JBLE1BQWNBO1FBQWRDLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO0lBQ2xDQSxDQUFDQTtJQUVERCwrQkFBTUEsR0FBTkE7UUFDSUUsNkNBQTZDQTtJQUNqREEsQ0FBQ0E7SUFFREYsOEJBQUtBLEdBQUxBO1FBRUlHLHlEQUF5REE7UUFDekRBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLFNBQVNBLENBQUNBLGtDQUFrQ0EsRUFBRUEsa0JBQWtCQSxDQUFDQSxDQUFDQTtRQUVqRkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDTkEsVUFBVUEsRUFBRUEsS0FBS0E7WUFDakJBLEtBQUtBLEVBQUVBLElBQUlBO1NBQ2RBLEVBQUVBLFVBQVVBLEdBQUdBLEVBQUVBLE9BQU9BLEVBQUVBLEtBQUtBO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUNBLENBQUNBO0lBQ1JBLENBQUNBO0lBRURILG9DQUFvQ0E7SUFDcENBLDZCQUE2QkE7SUFDN0JBLDZEQUE2REE7SUFDN0RBLHlCQUF5QkE7SUFDekJBLG9CQUFvQkE7SUFDcEJBLDJDQUEyQ0E7SUFDM0NBLGdEQUFnREE7SUFDaERBLFlBQVlBO0lBQ1pBLGdDQUFnQ0E7SUFDaENBLGdDQUFnQ0E7SUFDaENBLFlBQVlBO0lBQ1pBLFFBQVFBO0lBQ1JBLHVCQUF1QkE7SUFDdkJBLHFCQUFxQkE7SUFDckJBLG9DQUFvQ0E7SUFDcENBLDZEQUE2REE7SUFDN0RBLHdEQUF3REE7SUFDeERBLFlBQVlBO0lBQ1pBLDZCQUE2QkE7SUFDN0JBLG1DQUFtQ0E7SUFDbkNBLHlDQUF5Q0E7SUFDekNBLGFBQWFBO0lBQ2JBLEdBQUdBO0lBRUhBLCtCQUFNQSxHQUFOQSxVQUFPQSxLQUFLQTtRQUNSSSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUN2QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBL0ZMSjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsT0FBT0E7WUFDakJBLFFBQVFBLEVBQUVBLDJvREE2QlRBO1lBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLFVBRVJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSwwQkFBZUEsQ0FBQ0E7U0FDakRBLENBQUNBOzt1QkE0RERBO0lBQURBLHFCQUFDQTtBQUFEQSxDQWhHQSxBQWdHQ0EsSUFBQTtBQXpEWSxzQkFBYyxpQkF5RDFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgXHQ8Zm9ybSByb2xlPVwiZm9ybVwiIChzdWJtaXQpPVwibG9naW4oJGV2ZW50LCB1c2VybmFtZS52YWx1ZSwgcGFzc3dvcmQudmFsdWUpXCI+XG4gICAgICBcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgIFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICN1c2VybmFtZSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCI+XG4gICAgICBcdFx0PC9kaXY+XG4gICAgICBcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgIFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAjcGFzc3dvcmQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPlxuICAgICAgXHRcdDwvZGl2PlxuICAgICAgXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICBcdFx0PGEgaHJlZj1cIi9zaWdudXBcIj5DbGljayBoZXJlIHRvIFNpZ251cDwvYT5cbiAgICAgIFx0PC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1sZ1wiIChjbGljayk9XCJsb2dpbigpXCIgPlNpZ24gaW48L2J1dHRvbj5cbiAgICAgIFx0PCEtLTxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIj5cbiAgICAgIFx0XHQ8aDIgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+UGxlYXNlIHNpZ24gaW48L2gyPlxuICAgICAgXHRcdDxsYWJlbCBmb3I9XCJpbnB1dEVtYWlsXCIgY2xhc3M9XCJzci1vbmx5XCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICBcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIFsobmctbW9kZWwpXT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiByZXF1aXJlZCBhdXRvZm9jdXM+XG4gICAgICBcdFx0PGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzcz1cInNyLW9ubHlcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICBcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFsobmctbW9kZWwpXT1cInBhc3N3b3JkXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgICBcdFx0PGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICBcdFx0XHQ8bGFiZWw+XG4gICAgICBcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nLW1vZGVsKV09XCJyZW1lbWJlck1lXCIgdmFsdWU9XCJyZW1lbWJlci1tZVwiPiBSZW1lbWJlciBtZVxuICAgICAgXHRcdFx0PC9sYWJlbD5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiAoY2xpY2spPVwic3VibWl0KClcIiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgXHQ8L2Zvcm0+LS0+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG5cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICAgIC8vcHJpdmF0ZSBlbWFpbDogc3RyaW5nO1xuICAgIC8vcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICAgIC8vcHJpdmF0ZSByZW1lbWJlck1lOiBib29sZWFuO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICAvL1RPRE86IGltcGxlbWVudCBpbml0aWFsaXNhdGlvbiBvZiBjb21wb25lbnRcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcblxuICAgICAgICAvLyBJbml0aWFsaXplIEF1dGgwTG9jayB3aXRoIHlvdXIgYGNsaWVudElEYCBhbmQgYGRvbWFpbmBcbiAgICAgICAgdmFyIGxvY2sgPSBuZXcgQXV0aDBMb2NrKCdpa01qT0xhbmpPc2tlNjI0ZmFBalllMFZlN2NBT2czMycsICdzc3cuYXUuYXV0aDAuY29tJyk7XG5cbiAgICAgICAgbG9jay5zaG93KHtcbiAgICAgICAgICAgIGZvY3VzSW5wdXQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9wdXA6IHRydWUsXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIHByb2ZpbGUsIHRva2VuKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSBjb25zb2xlLmxvZygnbG9naW4gZXJyb3I6JywgZXJyKTtcbiAgICAgICAgICAgIGlmICh0b2tlbikgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIHRva2VuKTtcbiAgICAgICAgICAgIGlmIChwcm9maWxlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vbG9naW4oZXZlbnQsIHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIC8vICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgd2luZG93LmZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvc2Vzc2lvbnMvY3JlYXRlJywge1xuICAgIC8vICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAvLyAgICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAvLyAgICAgICAgfSxcbiAgICAvLyAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgICAgICAgICAgdXNlcm5hbWUsIHBhc3N3b3JkXG4gICAgLy8gICAgICAgIH0pXG4gICAgLy8gICAgfSlcbiAgICAvLyAgICAgICAgLnRoZW4oc3RhdHVzKVxuICAgIC8vICAgICAgICAudGhlbihqc29uKVxuICAgIC8vICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIHJlc3BvbnNlLmlkX3Rva2VuKTtcbiAgICAvLyAgICAgICAgICAgIHRoaXMucm91dGVyLnBhcmVudC5uYXZpZ2F0ZUJ5VXJsKCcvaG9tZScpO1xuICAgIC8vICAgICAgICB9KVxuICAgIC8vICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgIC8vICAgICAgICB9KTtcbiAgICAvL31cblxuICAgIHNpZ251cChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5wYXJlbnQubmF2aWdhdGVCeVVybCgnL3NpZ251cCcpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==