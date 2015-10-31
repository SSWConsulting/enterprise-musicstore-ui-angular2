import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';


@Component({
    selector: 'login',
    templateUrl: './components/login/login.html',
    styleUrls: ['./components/login/login.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})


export class LoginComponent implements OnInit {
  
    //private email: string;
    //private password: string;
    //private rememberMe: boolean;


    constructor(private router: Router) {
    }

    onInit() {
        //TODO: implement initialisation of component
    }

    login() {

        // Initialize Auth0Lock with your `clientID` and `domain`
        var lock = new Auth0Lock('ikMjOLanjOske624faAjYe0Ve7cAOg33', 'ssw.au.auth0.com');

        lock.show({
            focusInput: false,
            popup: true,
        }, function (err, profile, token) {
            if (err) console.log('login error:', err);
            if (token) localStorage.setItem('jwt', token);
            if (profile) localStorage.setItem('user', JSON.stringify(profile));
         });
    }

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

    signup(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    }
}
