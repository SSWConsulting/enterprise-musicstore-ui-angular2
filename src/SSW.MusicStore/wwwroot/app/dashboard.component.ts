import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroesService} from './heroes.service';
import {Routes} from './route.config';
import {Http} from 'angular2/http';


@Component({
  selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css'],
  directives: [CORE_DIRECTIVES]
})
export class DashboardComponent implements OnInit {
	public heroes: Hero[];
    genres: any;
  constructor(private _heroService: HeroesService, private _router: Router) { 
      //constructor(private _heroService: HeroesService, private _router: Router, private http:Http) { 

      //this.http.get('api/genres').map(res => res.json())
      //    .subscribe(genres => this.genres = genres);
      //console.log(this.genres);
  }

	onInit() {
    this.heroes = this.getHeroes();
  }

  gotoDetail(hero: Hero) {
    this._router.navigate([`/${Routes.detail.as}`, { id: hero.id }]);
  }

  getHeroes() {
    this.heroes = [];

    this._heroService.getHeroes()
      .then((heroes: Hero[]) => this.heroes = heroes);

    return this.heroes;
  }
}
