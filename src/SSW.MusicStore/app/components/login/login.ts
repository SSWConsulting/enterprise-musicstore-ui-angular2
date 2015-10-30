import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Routes} from '../../route.config';

@Component({
    selector: 'login',
    templateUrl: './components/login/login.html',
    styleUrls: ['./components/login/login.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginComponent implements OnInit {
    private email: string;
    private password: string;
    private rememberMe: boolean;

    constructor(private _router: Router) {
    }

    onInit() {
    }

    submit() {
        alert(this.email + this.password + this.rememberMe)
    }
}
