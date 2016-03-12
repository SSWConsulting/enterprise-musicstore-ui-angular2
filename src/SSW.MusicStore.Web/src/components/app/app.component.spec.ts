import {describe, it, expect, inject, injectAsync, beforeEach, beforeEachProviders, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import { provide } from 'angular2/core';
import { AppComponent } from './app';
import { GenreService } from './../../services/genre/genre.service';
import {Http, Response, BaseRequestOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {ROUTER_PRIMARY_COMPONENT, RouteRegistry, Router, Location } from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';

describe('App component', () => {
    var location, router, genreService, appComponent;

  beforeEachProviders(() => [
    RouteRegistry,
    GenreService,
    AppComponent,
    provide(Location, {useClass: SpyLocation}),
    provide(Router, {useClass: RootRouter}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend, options) => new Http(backend, options), 
      deps: [MockBackend, BaseRequestOptions]})
  ]);

    beforeEach(inject([Router, Location, GenreService, AppComponent], (r, l, g, a) => {
        router = r;
        location = l;
        genreService = g;
        appComponent = a;
    }));

    it('Should be able to navigate to Home', done => {
        router.navigate(['Orders']).then(() => {
            expect(location.path()).toBe('/orders');
            done();
        }).catch(e => done.fail(e));
    });
    
    // it('should greet', () => {
    //  //   expect(appComponent.title).toBe('SSW Angular 2 Music Store');
    // })

})