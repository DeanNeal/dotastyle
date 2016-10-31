import { NgModule, ApplicationRef }      from '@angular/core';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule }   from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';

import {MomentModule} from 'angular2-moment';

import { routing } from './app.routing';
import { HomeComponent }  from './home/home.component';
import { NewsComponent }  from './news/news.component';
import { ProfileComponent }  from './profile/profile.component';
import { MatchInfoComponent }  from './profile/match-info/match-info.component';


import { TopPanelComponent }  from './home/top-panel/top-panel.component';

import { HeroService }  from './services/hero.service';

function getAppModule(conf) {
  @NgModule({
    declarations: [ AppComponent, HomeComponent, NewsComponent, ProfileComponent, MatchInfoComponent, TopPanelComponent],
    imports:      [ BrowserModule, routing, HttpModule, JsonpModule, MomentModule],
    bootstrap:    [ AppComponent ],
    providers: [ HeroService ]
  })
  class AppModule {
    constructor (
       private heroService: HeroService
    ) {
       this.heroService.mainData = conf;
    }

  }
  return AppModule;
}

export default getAppModule;
