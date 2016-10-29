import { ReflectiveInjector, Injectable, OpaqueToken, Injector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {
  Http, CookieXSRFStrategy, XSRFStrategy, RequestOptions, BaseRequestOptions,
  ResponseOptions, BaseResponseOptions, XHRBackend, BrowserXhr, Response,  HttpModule, JsonpModule
} from '@angular/http';

import getAppModule from './app/app.module.ts';


import { HeroService }  from './app/services/hero.service';

class NoopCookieXSRFStrategy extends CookieXSRFStrategy {
  configureRequest(request) {
    // noop
  }
}

function getHttp(): Http {
  let providers = [
    {
      provide: Http, useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new Http(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    },
    BrowserXhr,
    { provide: RequestOptions, useClass: BaseRequestOptions },
    { provide: ResponseOptions, useClass: BaseResponseOptions },
    XHRBackend,
    { provide: XSRFStrategy, useValue: new NoopCookieXSRFStrategy() },
  ];
  return ReflectiveInjector.resolveAndCreate(providers).get(Http);
}

getHttp().get('http://www.dotastyle.com/api/getmaindata').toPromise()
  .then((res: Response) => {
    let conf = res.json();
    platformBrowserDynamic().bootstrapModule(getAppModule(conf));
  })
  .catch(error => { console.error(error) });