import { NgModule, ApplicationRef }      from '@angular/core';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule }   from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';

import { HomeComponent }  from './home/home.component';
import { NewsComponent }  from './news/news.component';

import { TopPanelComponent }  from './home/top-panel/top-panel.component';


@NgModule({
  imports:      [ 
  	BrowserModule,
  	RouterModule.forRoot([
  	  { path: '', component: HomeComponent },
  	  { path: 'pick', component: HomeComponent },
      { path: 'news', component: NewsComponent }
  	]),
  	HttpModule,
  	JsonpModule
  ],
  declarations: [ AppComponent , HomeComponent, NewsComponent, TopPanelComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

constructor(public appRef: ApplicationRef) {}
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