import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import * as _ from "lodash";
import 'rxjs/add/operator/map';

export type InternalStateType = {
    [key: string]: any
};

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web API
    public mainData = {
        heroes: [],
        lobbies: [],
        mods: []
    };
    _state: InternalStateType = {};
    constructor(private http: Http) { }
    url = 'http://www.dotastyle.com/api/';
    getMainData() {

        return this.http.get('http://www.dotastyle.com/api/getmaindata')
            .map((res: Response) => {
                // this.response;

                return res.json()
            });

    }

    getAntiPick(params) {
        return this.http.post('http://dotastyle.com/main/hero_picked/team', params)
            .map((res: Response) => {
                // this.response;

                return res.json()
            });

    }

    getSteamInfo() {

        return this.http.post(this.url + 'steam_get_userinfo', { steam_id: 76561198112299840 })
            .map((res: Response) => {
                // this.response;

                return res.json()
            });
    }

    getLastMatches() {
        let accountId = 152034112;
        return this.http.get(this.url + 'getlastmatches/' + accountId)
            .map((res: Response) => {
                // this.response;

                return res.json()
            });
    }

    getMatchInfo(params) {
        return this.http.get(this.url + 'getmatchdata/' + params.id)
            .map((res: Response) => {
                // this.response;
                return res.json()
            });
    }

    getLobbieById(id: any) {
        var lobbie = _.find(this.mainData.lobbies, { 'id': id });
        return lobbie.name;
    }

    getHeroById(data) {
        let hero: any;
        if (data.length) {
            hero = _.find(data, { 'account_id': 152034112 });
            hero = hero.hero_id;
        } else {
            hero = data;
        }

        return _.find(this.mainData.heroes, { 'id': hero });
    }
    getModeById(id) {
        let mode = _.find(this.mainData.mods, { 'id': id });
        return mode.name;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // // In a real world app, we might use a remote logging infrastructure
        // // We'd also dig deeper into the error to get a better message
        // let errMsg = (error.message) ? error.message :
        //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // console.error(errMsg); // log to console instead
        // return Observable.throw(errMsg);
    }
}
