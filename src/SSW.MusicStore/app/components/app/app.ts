import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {Routes, APP_ROUTES} from '../../route.config';
import {GenreService} from '../../services/genre.service';
import {Genre, User} from '../../models';

@Component({
    selector: 'app',
    templateUrl: './components/app/app.html',
    styleUrls: ['./components/app/app.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

@RouteConfig(APP_ROUTES)
export class AppComponent {
    public title = 'SSW Angular 2 Music Store';
    public routes = Routes;
    public genres: Genre[];
    public user: User;

    private lock = new Auth0Lock('ikMjOLanjOske624faAjYe0Ve7cAOg33', 'ssw.au.auth0.com');

    constructor(private _genreService: GenreService, private _router: Router) {
        this.getGenres();
        this.setUser();
    }

    setUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    }

    getGenres() {
        this.genres = [];
        this._genreService.getGenres()
            .then(genres => this.genres = genres);
        return this.genres;
    }

    goToGenre(genre: Genre) {
        this._router.navigate([`/${Routes.genre.as}`, { name: genre.name }]);
    }

    login() {
        this.lock.show({
            focusInput: false,
            popup: true,
        }, (err, profile, token) => {
            this.user = profile;
            if (err) console.log('login error:', err);
            if (token) localStorage.setItem('jwt', token);
            if (profile) localStorage.setItem('user', JSON.stringify(profile));
        });
    }

    register() {
        ///callback and error function
        // TODO route or login on register
        this.lock.showSignup(null, function (err) {
        console.log(err)});
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        //needed to hide img in menu as hidden is not working
        location.reload();
    }

}
