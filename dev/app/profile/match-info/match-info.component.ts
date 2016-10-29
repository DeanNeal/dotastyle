import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HeroService }  from '../../services/hero.service';

@Component({
  selector: 'profile',
  templateUrl: './match-info.component.html',
  styleUrls:  ['./match-info.component.scss']
  // providers: [HeroService]
})
export class MatchInfoComponent {
	lastMatches = [];
  sides = [];
	isLoading = true;
  private sub: any;
  id: number;
  matchInfo = {};
	constructor (
    private route: ActivatedRoute,
		// private heroService: HeroService
	) {}

  ngOnInit() {
    this.sides = [{title: 'The radiant', className: 'radiant'}, {title:'The dire', className: "dire"}];

    this.sub = this.route.params.subscribe(params => {
         // this.heroService.getMatchInfo(params).subscribe(response => {
         //      this.matchInfo = response;
         // });
    });
  }


  getHeroById() {
    return {id: 1, localized_name: 'Io'};
  }

  ngOnDestroy() {
     this.sub.unsubscribe();
   }

  getLobbieById() {
  	//var lobbie = _.findWhere(Backbone.globalData.lobbies, {'id': id});
  	return 1;//lobbie.name;
  }

}