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
var hero_service_1 = require('../services/hero.service');
var top_panel_component_1 = require('./top-panel/top-panel.component');
// import * as _ from 'lodash';
var HomeComponent = (function () {
    function HomeComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        this.radiantStrength = [];
        this.radiantAgility = [];
        this.radiantIntelligence = [];
        this.selectedHeroes = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getMainData().subscribe(function (response) {
            _this.heroes = _this.getHeroesArray(response);
        });
    };
    HomeComponent.prototype.getHeroesArray = function (data) {
        var types = ['radiant-strength', 'radiant-agility', 'radiant-intelligence', 'dire-strength', 'dire-agility', 'dire-intelligence'], heroesGroups = [];
        types.forEach(function (type) {
            heroesGroups.push(data.heroes.filter(function (item) { return item.type == type; }));
        });
        return heroesGroups;
    };
    HomeComponent.prototype.onHeroClick = function (hero) {
        if (this.selectedHeroes.length < 5 && !hero.selected) {
            hero.selected = true;
            this.selectedHeroes.push(hero);
        }
        this.topPanel.onHeroClick(this.selectedHeroes);
        //  this.heroService.getAntiPick(/* _.pluck(this.selectedHeroes, 'localized_name')*/).subscribe(response => {
        // });
    };
    __decorate([
        core_1.ViewChild(top_panel_component_1.TopPanelComponent), 
        __metadata('design:type', top_panel_component_1.TopPanelComponent)
    ], HomeComponent.prototype, "topPanel", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: './dev/app/home/home.component.html',
            styleUrls: ['./dev/scss/styles.css', './dev/app/home/home.component.css'],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map