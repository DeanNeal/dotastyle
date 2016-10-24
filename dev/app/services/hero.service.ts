import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web API
  constructor (private http: Http) {}


    getMainData (){
      
       return this.http.get('http://www.dotastyle.com/api/getmaindata')
            .map((res:Response) => {
              // this.response;

              return res.json()
            });
       
    }

    getAntiPick (params){
       return this.http.post('http://dotastyle.com/main/hero_picked/team', params)
            .map((res:Response) => {
              // this.response;

              return res.json()
            });
       
    }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // // In a real world app, we might use a remote logging infrastructure
    // // We'd also dig deeper into the error to get a better message
    // let errMsg = (error.message) ? error.message :
    //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    // return Observable.throw(errMsg);
  }
}