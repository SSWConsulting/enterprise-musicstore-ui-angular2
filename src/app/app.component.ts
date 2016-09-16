import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "SSW Music Store";

  constructor(private _auth: AuthService) {
  }

  login() {
    this._auth.login();
  }

  loggedIn() {
    return this._auth.authenticated();
  }

  logout() {
    this._auth.logout();
  }

  getProfile() {
    return this._auth.userProfile;
  }
}
