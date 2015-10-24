import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AlbumService} from './album.service';
import {GenreService} from './genre.service';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, GenreService, AlbumService]);
