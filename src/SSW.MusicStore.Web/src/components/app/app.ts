import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FormBuilder, Validators} from 'angular2/common';
import {RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {Routes, APP_ROUTES} from '../../route.config';
import {GenreService} from '../../services/genre/genre.service';
import {Genre, User} from '../../models';
import {AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '../../config';
import {LoggedInRouterOutlet} from './LoggedInOutlet';

declare var Auth0Lock:any;

import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value:number, args:string[]) : any {
    return Math.pow(value, parseInt(args[0] || '1', 10));
  }
}


@Component({
    selector: 'app',
    template: require('./app.html'),
    styles:  [require('./app.css')],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES] //, LoggedInRouterOutlet]
})

@RouteConfig(APP_ROUTES)
export class AppComponent implements OnInit {
    public title = 'SSW Angular 2 Music Store';
    public routes = Routes;
    public genres: Genre[] = [];
    public user: User;
    private lock: any;
    form;

    constructor(private genreService: GenreService, public router: Router, private fb: FormBuilder) {
      
        this.form = this.fb.group({
            name: ['', Validators.required],
            street: ['', Validators.minLength(3)],
            city: ['', Validators.maxLength(10)],
            zip: ['', Validators.pattern('[A-Za-z]{5}')]
        });
        
        
    }
    
    
    
    
    ngOnInit() {
        this.lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
        this.getGenres();
        this.setUser();
        toastr.options.positionClass = 'toast-bottom-right';
    }


    setUser() {
        let savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            this.user = savedUser;
        };
    }

    getGenres() {
        this.genreService.getGenres()
            .subscribe((genres) => {
                this.genres = genres;
            });
    }

    goToGenre(genre: Genre) {
        this.router.navigate([`/Genres/Genre`, { name: genre.name }]);
    }

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

    register() {
        this.lock.showSignup(null, function (err) {
            console.log(err);
        });
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        this.router.navigate([`/${Routes.dashboard.as}`]);
        location.reload();
    }

}
