import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {Routes, APP_ROUTES} from '../../route.config';
import {GenreService} from '../../services/genre.service';
import {Genre, User} from '../../models';
import {AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '../../config';
import {LoggedInRouterOutlet} from './LoggedInOutlet';

@Component({
    selector: 'app',
    templateUrl: './components/app/app.html',
    styleUrls: ['./components/app/app.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, LoggedInRouterOutlet]
})

@RouteConfig(APP_ROUTES)
export class AppComponent implements OnInit {
    public title = 'SSW Angular 2 Music Store';
    public routes = Routes;
    public genres: Genre[];
    public user: User;
    private lock: any;

    constructor(private genreService: GenreService, public router: Router) {
        this.lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
        this.getGenres();
        this.setUser();
    }

    onInit() {
        // Initialise the component 
    }

    setUser() {
        let savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            this.user = savedUser;
        };
    }

    getGenres() {
        this.genres = [];
        this.genreService.getGenres()
            .then(genres => this.genres = genres);
        return this.genres;
    }

    goToGenre(genre: Genre) {
        this.router.navigate([`/${Routes.genre.as}`, { name: genre.name }]);
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
            }
        });
    }

    register() {
        ///callback and error function
        // TODO route or login on register
        this.lock.showSignup(null, function (err) {
            console.log(err);
        });
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        //needed to hide img in menu as hidden is not working
        location.reload();
    }

}
