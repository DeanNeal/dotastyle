"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Hero = (function () {
    function Hero(id, author, text) {
        this.id = id;
        this.author = author;
        this.text = text;
    }
    return Hero;
}());
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes'; // URL to web API
    }
    HeroService.prototype.getMainData = function () {
        var _this = this;
        return this.http.get('http://www.dotastyle.com/api/getmaindata')
            .map(function (res) {
            _this.response;
            return res.json();
        });
    };
    // getHeroes (): Observable<Hero[]> {
    //   return this.http.get(this.heroesUrl)
    //                   .map(this.extractData)
    //                   .catch(this.handleError);
    // }
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    HeroService.prototype.handleError = function (error) {
        // // In a real world app, we might use a remote logging infrastructure
        // // We'd also dig deeper into the error to get a better message
        // let errMsg = (error.message) ? error.message :
        //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // console.error(errMsg); // log to console instead
        // return Observable.throw(errMsg);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map