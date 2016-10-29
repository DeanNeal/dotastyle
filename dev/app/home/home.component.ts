import { Component, OnInit, Output, EventEmitter, Input, ViewChild, Inject } from '@angular/core'

import { HeroService }  from '../services/hero.service'

import { TopPanelComponent }  from './top-panel/top-panel.component'

import * as _ from "lodash";

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(
        // @Inject('HeroService') private heroService:HeroService
        private heroService: HeroService
        // @Inject(HeroService) private heroService:HeroService
    ) { }

    heroes: any;
    radiantStrength = [];
    radiantAgility = [];
    radiantIntelligence = [];

    // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild(TopPanelComponent)
    private topPanel: TopPanelComponent;

    ngOnInit() {
        this.heroes = this.getHeroesArray(this.heroService.mainData.heroes);
    }

    getHeroesArray(heroes) {
        let types = ['radiant-strength', 'radiant-agility', 'radiant-intelligence', 'dire-strength', 'dire-agility', 'dire-intelligence'],
            heroesGroups = [];

        types.forEach(type => {
            heroesGroups.push(heroes.filter(item => item.type == type));
        });

        return heroesGroups;
    }

    onHeroClick(hero) {
        if (!hero.selected) {
            this.topPanel.onHeroClick(hero);
        }

        //  this.heroService.getAntiPick(/* _.pluck(this.selectedHeroes, 'localized_name')*/).subscribe(response => {

        // });
    }




}
