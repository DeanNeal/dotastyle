import { Component, OnInit, Input  } from '@angular/core';
// import * as _ from 'lodash'

@Component({
  selector: 'top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls:  ['./top-panel.component.scss']
})
export class TopPanelComponent {
	selectedHeroes = [];
  @Input() heroes;
	constructor (

	) {}

  ngOnInit() {
    for (var i = 0; i < 5; ++i) {
      this.selectedHeroes.push({});
    }   
  }

  onHeroClick(hero) {
    for (var i = 0; i < this.selectedHeroes.length; ++i) {
        if(!this.selectedHeroes[i].id){
          this.selectedHeroes[i] = hero;
          break;
        }
    }
  }
  
  onRemoveClick(hero) {
    hero.selected = false;
    this.selectedHeroes.forEach((item, i)=>{
       if(item.id === hero.id){
         this.selectedHeroes[i] = {};
       }
    });

  }

}