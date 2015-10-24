import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroesService} from './heroes.service';
import {Routes} from './route.config';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
  public hero;

  constructor(private _heroService: HeroesService,
    private _routeParams: RouteParams, private _router: Router) {
  }

  onInit() {
    if (!this.hero) {
      let id = +this._routeParams.get('id');
    //  this._heroService.getHero(id).then((hero) => this.hero = hero);
    }
  }

  gotoHeroes() {
    this._router.navigate([`/${Routes.heroes.as}`]);
  }
}
