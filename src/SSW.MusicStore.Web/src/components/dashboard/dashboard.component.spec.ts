import {describe, it, expect, inject, injectAsync, beforeEach, beforeEachProviders, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import { provide } from 'angular2/core';
import { DashboardComponent } from '././dashboard';
import { AppComponent } from './../app/app';
import {AlbumService} from '../../services/album/album.service';
import {Http, Response, BaseRequestOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {ROUTER_PRIMARY_COMPONENT, RouteRegistry, Router, Location } from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';
import { Album  } from './../../models';


describe('DashBoard Component', () => {
    var dashboardComponent, albumService, mockbackend;
    
    class AppMockComponent {}

    beforeEachProviders(() => [
        MockBackend,
        BaseRequestOptions,
        DashboardComponent,
        AlbumService,
         provide(Http, {
            useFactory: (backend, options) => new Http(backend, options), 
            deps: [MockBackend, BaseRequestOptions]}),
         RouteRegistry,
        provide(Location, {useClass: SpyLocation}),
        provide(Router, {useClass: RootRouter}),
        provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppMockComponent})
    ]);

    beforeEach(inject([DashboardComponent, AlbumService, MockBackend], (d, a, m) => {
        dashboardComponent = d;
        albumService = a;
        mockbackend = m;

    }));

    it('Should be defined', () => {
        expect(dashboardComponent.searching).toBe(false)
    });
    
     it('should return mocked response', done => {
    let response = [
        {
            albumId: 1,
            title: 'The Best Of The Men At Work',
            price: 8.99,
            albumArtUrl: '/assets/img/placeholder.png',
            artist: [],
            orderDetails: [ ],
            created: '2015-11-29T11:11:19.3459998'
        }
    ];
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<any>{body: JSON.stringify(response)}));
    });
     albumService.getPopularAlbums().subscribe((albums: Album) => {
        expect(albums[0].albumId).toBe(1);
      done();
    });
  });
    
    
});