import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Router, ROUTER_DIRECTIVES } from '@angular/router';
import {Routes} from '../../route.config';
import {GenreService} from '../../services/genre/genre.service';
import {Genre, User} from '../../models';
import {AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '../../config';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Auth0Lock: any;

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls: ['app/components/app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class AppComponent {
    title = 'SSW Angular 2 Music Store';
    routes = Routes;
    genres: Genre[] = [];
    user: User;
    lock: any;
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private genreService: GenreService, public router: Router) {
        this.lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
        this.getGenres();
        this.setUser();
        toastr.options.positionClass = 'toast-bottom-right';
    }

    login() {
        this.lock.show((err: string, profile: string, id_token: string) => {

            if (err) {
                throw new Error(err);
            }

            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);
            this.setUser();
            location.reload();
        });
    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
        this.router.navigate([`/`]);
    }


    setUser() {
        let savedUser = JSON.parse(localStorage.getItem('profile'));
        if (savedUser) {
            this.user = savedUser;
        };
    }

    loggedIn() {
        return tokenNotExpired();
    }

    getGenres() {
        this.genreService.getGenres()
            .subscribe((genres) => {
                this.genres = genres;
            });
    }

    goToGenre(genre: Genre) {
        this.router.navigate([`/genres/genre`, genre.name]);
    }



}
