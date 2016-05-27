import { Component } from '@angular/core';
import { HomeComponent } from './home';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import * as md from './angular-material/index';

import { AlbumComponent } from './album';
import { AlbumService } from './services/album/album.service';
import { CartService } from './services/cart/cart.service';

@Component({
  moduleId: module.id,
  selector: 'music-store-app',
  templateUrl: 'music-store.component.html',
  styleUrls: ['music-store.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    md.MD_SIDENAV_DIRECTIVES,
    md.MdToolbar,
    md.MdButton,
    md.MdIcon
  ],
  providers: [ROUTER_PROVIDERS, md.MdIconRegistry, md.MdRadioDispatcher, AlbumService, CartService],

})
@Routes([
  { path: '/', component: HomeComponent },
  {path: '/album/:id', component: AlbumComponent}
])
export class MusicStoreAppComponent {
  public title: string = 'SSW Music Store'
}
