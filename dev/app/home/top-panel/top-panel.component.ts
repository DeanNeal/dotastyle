import { Component, OnInit, Input  } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'top-panel',
  templateUrl: './dev/app/home/top-panel/top-panel.component.html',
  styleUrls:  ['./dev/scss/styles.css']
})
export class TopPanelComponent {
	selectedHeroes = [];
	constructor (

	) {}

  ngOnInit() {

  }

  onHeroClick(heroes) {
    this.selectedHeroes = heroes;
  }
  
  onRemoveClick(hero) {
    hero.selected = false;
    this.selectedHeroes.forEach((item, index)=>{
       if(item.id === hero.id){
         this.selectedHeroes.splice(index, 1);
       }
    });
  }

}