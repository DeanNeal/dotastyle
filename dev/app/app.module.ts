import { NgModule, ApplicationRef }      from '@angular/core';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule }   from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';

import { routing } from './app.routing';
import { HomeComponent }  from './home/home.component';
import { NewsComponent }  from './news/news.component';
import { ProfileComponent }  from './profile/profile.component';
import { MatchInfoComponent }  from './profile/match-info/match-info.component';


import { TopPanelComponent }  from './home/top-panel/top-panel.component';


@NgModule({
  imports:      [ 
  	BrowserModule,
    routing,
  	HttpModule,
  	JsonpModule
  ],
  declarations: [ AppComponent , HomeComponent, NewsComponent, ProfileComponent, MatchInfoComponent, TopPanelComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
      constructor(
        public appRef: ApplicationRef
      ) {}
      hmrOnInit(store) {
        console.log('HMR store', store);
      }
      hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
      }
      hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
      }
}