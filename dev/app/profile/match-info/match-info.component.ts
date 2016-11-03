import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService }  from '../../services/hero.service';

// import { TooltipComponent }  from '../../overall/tooltip.component';


@Component({
    selector: 'profile',
    templateUrl: './match-info.component.html',
    styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent {
    lastMatches = [];
    sides: any = [];
    abilities = [];
    isLoading = true;
    timeout;
    private sub: any;
    public matchInfo: any = {};
    constructor(
        private route: ActivatedRoute,
        public heroService: HeroService
    ) { }

    ngOnInit() {
        for (var i = 0; i < 25; ++i) {
            this.abilities.push({});
        }

        this.sides = [
            {
                title: 'THE RADIANT',
                buildTitle: 'RADIANT BUILDS',
                className: 'radiant',
                players: []
            },
            {
                title: 'THE DIRE',
                buildTitle: 'DIRE BUILDS',
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
            },() => {
                alert('Error');
            });
        });
    }

    getLobbieById() {
        return this.heroService.getLobbieById(this.matchInfo.lobby_type);
    }

    getModeById() {
        return this.heroService.getModeById(this.matchInfo.game_mode);
    }

    onMouseOver(player) {
      this.timeout = setTimeout(()=>{
        this.heroService.getTooltip().subscribe((params:any) => {
            player.tooltip = params;
        });
      },300);

    }

    onMouseOut(player) {
        clearTimeout(this.timeout);
        player.tooltip = null;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
