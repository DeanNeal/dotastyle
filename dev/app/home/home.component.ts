import { Component, OnInit } from '@angular/core';

import { HeroService } from 'dev/app/services/hero.service';

@Component({
  selector: 'my-home',
  templateUrl: './dev/app/home/home.component.html',
  styleUrls:  ['./dev/scss/styles.css'],
   providers: [HeroService]
})
export class HomeComponent {

	constructor (
		private heroService: HeroService
	) {}

  ngOnInit() {
    console.log('Hello Home');

    this.heroService.getMainData().subscribe(response => {
    	this.heroes = response.heroes;
    });
  }

}