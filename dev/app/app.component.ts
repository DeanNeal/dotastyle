import { Component } from '@angular/core'
import { HeroService }  from './services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss'],
  providers: [HeroService]
})

export class AppComponent { 
	menuLinks: any;
	activeChildRoute: boolean;
	constructor (
		public heroService: HeroService

	) {

	}

	ngOnInit() {
		this.menuLinks = [
			// {name: 'Pick', link: 'pick'}, 
			{name: 'News', link: 'news'},
			{name: 'Profile', link: 'profile'}
			// {name: 'Heroes', link: 'heroes'}
		];	
		this.activeChildRoute = true;
		// setTimeout(() =>{ 
		//      this.activeChildRoute = false;
		// 	this.heroService.getMainData().subscribe(response => {

		// 	  this.heroService.mainData = response;
		// 	  this.activeChildRoute = true;
		// 	});
		// }, 0);
	}


}