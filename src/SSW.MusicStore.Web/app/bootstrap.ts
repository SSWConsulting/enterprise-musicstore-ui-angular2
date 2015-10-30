import {bind, bootstrap} from 'angular2/angular2';
import {ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
import {AppComponent} from './components/app/app';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AlbumService} from './services/album.service';
import {GenreService} from './services/genre.service';
import {NameList} from './services/name_list';

bootstrap(AppComponent,
    [ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        GenreService,
        AlbumService,
        NameList,
        ROUTER_BINDINGS,
        bind(ROUTER_PRIMARY_COMPONENT).toValue(AppComponent)
    ]);
