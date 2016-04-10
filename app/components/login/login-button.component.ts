import {Component, OnInit, Input} from 'angular2/core';
import { User } from './../../models';
import {RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {Routes, APP_ROUTES} from '../../route.config';
import {AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '../../config';

declare var Auth0Lock: any;

@Component({
    selector: 'login-button',
    template: `
        <button (click)="login()" class="btn btn-link">{{loginMessage}}</button>
    `,
})

export class LoginButtonComponent implements OnInit {
    @Input() loginMessage: string = "Login";
    lock: any;
    user: User;
    
    constructor(public router: Router) { 
        this.lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
    }

    ngOnInit() { }
    
        login() {
        this.lock.show({
            focusInput: false,
            popup: true
        }, (err, profile, token) => {
            if (err) console.log('login error:', err);
            if (token) localStorage.setItem('jwt', token);
            if (profile) {
                localStorage.setItem('user', JSON.stringify(profile));
                this.user = profile;
                this.router.navigate([`/${Routes.dashboard.as}`]);
                location.reload();
            }
        });
    }
}