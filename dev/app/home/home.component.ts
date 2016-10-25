import { Component, OnInit,  Output, EventEmitter, Input, ViewChild  } from '@angular/core';

import { HeroService }  from '../services/hero.service';

import { TopPanelComponent }  from './top-panel/top-panel.component';

// import * as _ from 'lodash';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls:  ['./home.component.scss'],
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
    if(!hero.selected){
      this.topPanel.onHeroClick(hero);
    }

  //  this.heroService.getAntiPick(/* _.pluck(this.selectedHeroes, 'localized_name')*/).subscribe(response => {
           
   // });
  }




}