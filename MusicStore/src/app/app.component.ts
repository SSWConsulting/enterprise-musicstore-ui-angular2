import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreService } from './services/genre/genre.service';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './config';
import { Genre, User } from './models';

// Avoid name not found warnings
declare var Auth0Lock: any;
declare var toastr: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SSW Angular 2 Music Store';
  genres: Genre[] = [];
  user: User;
  lock: any;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private genreService: GenreService, public router: Router) {
    this.lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
    this.setUser();
    toastr.options.positionClass = 'toast-bottom-right';
  }

  ngOnInit() {
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

  goToGenre(genre: Genre) {
    this.router.navigate([`/genres/${genre.name}`]);
  }
}
