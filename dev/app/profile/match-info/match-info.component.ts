import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService }  from '../../services/hero.service';

@Component({
    selector: 'profile',
    templateUrl: './match-info.component.html',
    styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent {
    lastMatches = [];
    sides:any = [];
    radiantTeam = [];
    direTeam = [];
    isLoading = true;
    private sub: any;
    public matchInfo: any = {};
    constructor(
        private route: ActivatedRoute,
        public heroService: HeroService
    ) { }

    ngOnInit() {
        this.sides = [
            {
                title: 'The radiant',
                className: 'radiant',
                players: []
            },
            {
                title: 'The dire',
                className: "dire",
                players: []
            }
        ];

        this.sub = this.route.params.subscribe(params => {
            this.heroService.getMatchInfo(params).subscribe(response => {
                this.matchInfo = response;
                response.players.forEach((item, i) => {
                    if (i < 5) {
                        this.sides[0].players.push(item);
                    } else {
                        this.sides[1].players.push(item);
                    }
                });
            });
        });
    }

    getLobbieById() {
        return this.heroService.getLobbieById(this.matchInfo.lobby_type);
    }
    getModeById() {
        return this.heroService.getModeById(this.matchInfo.game_mode);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
