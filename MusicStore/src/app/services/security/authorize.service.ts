import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class Authorize implements CanActivate {
    constructor(private router: Router) {
        
    }

    canActivate(route: any, state: any): Observable<boolean> | boolean {
        var loggedIn = tokenNotExpired();
        if (!loggedIn) {
            this.router.navigate(["/login"]);
        }
        return loggedIn;
    }
}