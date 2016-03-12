import {describe, it, expect, inject, injectAsync, beforeEach, beforeEachProviders, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import { provide } from 'angular2/core';
import { AppComponent } from './../app/app';
import {ROUTER_PRIMARY_COMPONENT, RouteRegistry, Router, Location } from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';

describe('DashBoard Route', () => {
var location, router;
  
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation}),
    provide(Router, {useClass: RootRouter}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent})
  ]);
  
  beforeEach(inject([Router, Location], (r, l) => {
    router = r;
    location = l;
  }));
  
  it('Should be able to navigate to dashboard', done => {    
    router.navigate(['Dashboard']).then(() => {
      expect(location.path()).toBe('');
      done();
    }).catch(e => done.fail(e));
  });

});