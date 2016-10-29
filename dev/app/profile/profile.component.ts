import { Component, OnInit } from '@angular/core';
import { HeroService }  from '../services/hero.service';
import * as _ from "lodash";
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls:  ['./profile.component.scss']
})
export class ProfileComponent {
	lastMatches = [];
	isLoading = true;
	constructor (
		private heroService: HeroService
	) {}

  ngOnInit() {


  	this.heroService.getLastMatches().subscribe(response => {
  	   this.lastMatches = response.result;
  	   this.isLoading = false;
  	});


  }
	getHeroById(players) {
		return _.find(players, {'account_id': 152034112});
    //_.find(players, {'account_id': 152034112}).hero_id);
	}
  getLobbieById(id) {debugger
  	var lobbie = _.find(this.heroService.mainData.lobbies, {'id': id});
  	return lobbie.name;
  }

}
