import { Component, OnInit, Input} from '@angular/core';
// import { HeroService }  from '../services/hero.service';

@Component({
    selector: 'tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
    show = false;
    data = {};
    @Input() tooltip;
    constructor(
      // public heroService: HeroService
    ) { }

    ngOnInit() {

    }

}
