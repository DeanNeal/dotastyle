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
var TopPanelComponent = (function () {
    function TopPanelComponent() {
        this.selectedHeroes = [];
    }
    TopPanelComponent.prototype.ngOnInit = function () {
    };
    TopPanelComponent.prototype.onHeroClick = function (heroes) {
        this.selectedHeroes = heroes;
    };
    TopPanelComponent.prototype.onRemoveClick = function (hero) {
        var _this = this;
        hero.selected = false;
        this.selectedHeroes.forEach(function (item, index) {
            if (item.id === hero.id) {
                _this.selectedHeroes.splice(index, 1);
            }
        });
    };
    TopPanelComponent = __decorate([
        core_1.Component({
            selector: 'top-panel',
            templateUrl: './dev/app/home/top-panel/top-panel.component.html',
            styleUrls: ['./dev/scss/styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TopPanelComponent);
    return TopPanelComponent;
}());
exports.TopPanelComponent = TopPanelComponent;
//# sourceMappingURL=top-panel.component.js.map