import { Component } from '@angular/core';
import { HomeComponent } from './home';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import * as md from './angular-material/index';

@Component({
  moduleId: module.id,
  selector: 'music-store-app',
  templateUrl: 'music-store.component.html',
  styleUrls: ['music-store.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    md.MD_SIDENAV_DIRECTIVES,
    md.MD_LIST_DIRECTIVES,
    md.MD_CARD_DIRECTIVES,
    md.MdToolbar,
    md.MdButton,
    md.MdInput,
    md.MdCheckbox,
    md.MdRadioGroup,
    md.MdRadioButton,
    md.MdIcon
  ],
  providers: [ROUTER_PROVIDERS, md.MdIconRegistry, md.MdRadioDispatcher],

})
@Routes([
  { path: '/', component: HomeComponent }
])
export class MusicStoreAppComponent {
  public title: string = 'SSW Music Store'
}
