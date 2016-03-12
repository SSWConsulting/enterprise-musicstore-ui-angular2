import {describe, it, expect, inject, injectAsync, beforeEach, beforeEachProviders, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import { provide } from 'angular2/core';
import { DashboardComponent } from '././dashboard';
import {AlbumService} from '../../services/album/album.service';
import {Http, Response, BaseRequestOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

describe('DashBoard Component', () => {
    var dashboardComponent, albumService, mockbackend;

    beforeEachProviders(() => [
        MockBackend,
        BaseRequestOptions,
        DashboardComponent,
        AlbumService,
         provide(Http, {
            useFactory: (backend, options) => new Http(backend, options), 
            deps: [MockBackend, BaseRequestOptions]}),
    ]);

    beforeEach(inject([DashboardComponent, AlbumService, MockBackend], (d, a, m) => {
        dashboardComponent = d;
        albumService = a;
        mockbackend = m;

    }));

    it('Should be defined', () => {
        expect(DashboardComponent).toBeDefined(true)
    });
});