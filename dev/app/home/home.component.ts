import { Component, OnInit } from '@angular/core';

import { HeroService }  from '../services/hero.service';

@Component({
  selector: 'my-home',
  templateUrl: './dev/app/home/home.component.html',
  styleUrls:  ['./dev/scss/styles.css'],
   providers: [HeroService]
})
export class HomeComponent {
	heroes = [];
	constructor (
		private heroService: HeroService
	) {}

  ngOnInit() {
    console.log('Hello Home');

    this.heroService.getMainData().subscribe(response => {
    	 
    	this.heroes = response.heroes;
    	this.radiantStrength = response.heroes.filter(item=> item.type == 'radiant-strength');
      this.radiantAgility = response.heroes.filter(item=> item.type == 'radiant-agility');
      this.radiantIntelligence = response.heroes.filter(item=> item.type == 'radiant-intelligence');
      

    });
  }

}