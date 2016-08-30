import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreService } from './services/genre/genre.service';
import { Genre, User } from './models';
import { AuthService } from './services/auth/auth.service';

// Avoid name not found warnings
declare var Auth0Lock: any;
declare var toastr: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'SSW Angular 2 Music Store';

  constructor(private _auth: AuthService) {
    toastr.options.positionClass = 'toast-bottom-right';
  }

  login() {
    this._auth.login();
  }

  logout() {
    this._auth.logout();
  }

  loggedIn() {
    return this._auth.authenticated();
  }

  getProfile() {
    return this._auth.userProfile;
  }
}
