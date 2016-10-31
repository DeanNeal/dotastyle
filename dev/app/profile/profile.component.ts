import { Component, OnInit } from '@angular/core';
import { HeroService }  from '../services/hero.service';
import * as _ from "lodash";
@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    lastMatches = [];
    isLoading = true;
    constructor(
        public heroService: HeroService
    ) { }

    ngOnInit() {


        this.heroService.getLastMatches().subscribe(response => {
            this.lastMatches = response.result;
            this.isLoading = false;
        }, () => {
            alert('Error');
        });


    }


}
