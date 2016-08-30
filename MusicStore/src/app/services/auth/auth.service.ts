/* ===== app/auth.service.ts ===== */
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../config';
import {Router, NavigationEnd} from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;
declare var Auth0: any;

@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});

  auth0 = new Auth0({
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
  });

  userProfile: any;

  constructor(private router: Router) {
    console.log("Auth Service Loaded");

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (window.location.href.indexOf("access_token%3D") >= 0) {
          console.log("TEMPORARY HACK: Detected encoded URL AccessToken. Manually parsing id_token. See https://github.com/auth0-samples/auth0-angularjs2-systemjs-sample/issues/30");
          var parsedData = this.auth0.parseHash(decodeURIComponent(window.location.href));
          console.log(parsedData);
          this.setIdToken(parsedData.idToken);
        }
      }
    });

    // Set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      this.setIdToken(authResult.idToken);
    });
  }

  private setIdToken(idToken) {
      localStorage.setItem('id_token', idToken);
      
      // Fetch profile information
      this.lock.getProfile(idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  };
}