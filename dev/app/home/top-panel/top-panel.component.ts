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
    this.selectedHeroes.forEach((item, i)=>{
       if(!item.id){
         hero.selected = true;
       }
    });

    for (var i = 0; i < this.selectedHeroes.length; ++i) {
        if(!this.selectedHeroes[i].id){
          this.selectedHeroes[i] = hero;
          this.selectedHeroes[i].colorScheme = this.getRandomColor();
          break;
        }
    }
  }
  
  onRemoveClick(hero) {
  
    this.selectedHeroes.forEach((item, i)=>{
       if(item.id === hero.id){
         hero.selected = false;
         this.selectedHeroes[i] = {};
       }
    });

  }

      getRandomColor() {
        return 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',0.5)';
    }

}