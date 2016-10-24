import { Component, OnInit,  Output, EventEmitter, Input, ViewChild  } from '@angular/core';

import { HeroService }  from '../services/hero.service';

import { TopPanelComponent }  from './top-panel/top-panel.component';

// import * as _ from 'lodash';

@Component({
  selector: 'my-home',
  templateUrl: './dev/app/home/home.component.html',
  styleUrls:  ['./dev/scss/styles.css', './dev/app/home/home.component.css'],
  providers: [HeroService]
})
export class HomeComponent {

  constructor (
    private heroService: HeroService
  ) {}

  heroes = [];
  radiantStrength = [];
  radiantAgility = [];
  radiantIntelligence = [];

  selectedHeroes = [];

  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TopPanelComponent)
  private topPanel: TopPanelComponent;

  ngOnInit() {

    this.heroService.getMainData().subscribe(response => {
        this.heroes = this.getHeroesArray(response);
    });
  }

  getHeroesArray(data) {
      let types = ['radiant-strength', 'radiant-agility', 'radiant-intelligence', 'dire-strength', 'dire-agility', 'dire-intelligence'],
          heroesGroups = [];

      types.forEach(type=>{
          heroesGroups.push(data.heroes.filter(item=> item.type == type));
      });

      return heroesGroups;
  }

  onHeroClick(hero) {

    if(this.selectedHeroes.length < 5 && !hero.selected){
      hero.selected = true;
      this.selectedHeroes.push(hero);
    }

    this.topPanel.onHeroClick(this.selectedHeroes);


  //  this.heroService.getAntiPick(/* _.pluck(this.selectedHeroes, 'localized_name')*/).subscribe(response => {
           
   // });
  }




}