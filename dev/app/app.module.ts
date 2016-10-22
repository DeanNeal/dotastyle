import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule }   from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';

import { HomeComponent }  from './home/home.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	RouterModule.forRoot([
  	  { path: '', component: HomeComponent },
  	  { path: 'pick', component: HomeComponent }
  	]),
  	HttpModule,
  	JsonpModule
  ],
  declarations: [ AppComponent , HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }