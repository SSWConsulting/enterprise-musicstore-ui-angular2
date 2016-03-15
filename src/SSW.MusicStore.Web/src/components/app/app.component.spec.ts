import {describe, it, expect, inject, injectAsync, beforeEach, beforeEachProviders, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import { provide } from 'angular2/core';
import { AppComponent } from './../app/app';
import {GenreService} from '../../services/genre/genre.service';
import {Http, Response, BaseRequestOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {ROUTER_PRIMARY_COMPONENT, RouteRegistry, Router, Location } from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';
import { Genre  } from './../../models';


describe('App Component', () => {
    var appComponent, genreService, mockbackend;
    
    class AppMockComponent {}

    beforeEachProviders(() => [
        MockBackend,
        BaseRequestOptions,
        AppComponent,
        GenreService,
         provide(Http, {
            useFactory: (backend, options) => new Http(backend, options), 
            deps: [MockBackend, BaseRequestOptions]}),
         RouteRegistry,
        provide(Location, {useClass: SpyLocation}),
        provide(Router, {useClass: RootRouter}),
        provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppMockComponent})
    ]);

    beforeEach(inject([AppComponent, GenreService, MockBackend], (a, g, m) => {
        appComponent = a;
        genreService = g;
        mockbackend = m;
    }));

    it('Should be defined', () => {
        expect(appComponent.title).toBe('SSW Angular 2 Music Store')
    });
    
     it('should return mocked response', done => {
    
        let response = [
            {
                genreId: 1,
                name: 'Pop',
                description: 'Pop is great music (if you like it).',
                albums: null
            }
        ];  
        
        mockbackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(<any>{body: JSON.stringify(response)}));
        });
    
        appComponent.getGenres();
        expect(appComponent.genres.length).toBe(1);
        done();
    });
});

