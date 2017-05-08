import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable }     from '@angular/core';
import { Http,
         Headers,
         RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class ApiService {
  
  /** 
   *  What Cache Service & what does id do?
   *
   *  It handle all urls like
   *  - /recipes?page=3&amount=5&shoe[color]=blue&shoe[type]=converse
   *  // >> req.query.shoe.color, req.query.shoe.type 
   *  - /recipes/1715
   *  - /search?q=tobi+ferret > req.query.q > "tobi ferret"
   *  and cache it response in memory to prevent repeated requests
   **/

  constructor(public _http: Http) { }
  
  /*  whatever domain/feature method name  */
  get(url:string, params?: any) {
    
    /** Params in header >> Old version
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    headers.append('Body', JSON.stringify({ params }));
    //.get(url, { headers: headers })
    **/
    return this._http
      .get(url)
      .map(res => res.json())
      .catch(err => { return Observable.throw(err); })
  }

  post(url:string, data:any) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http
      .post(url, JSON.stringify({ data }), { headers: headers })
      .map((res) => res.json())
      .catch(err => { return Observable.throw(err); });
  }

  put(url:string, data: any) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http
      .put(url, JSON.stringify({ data }), { headers: headers })
      .map((res) => res.json())
      .catch(err => { return Observable.throw(err); });
  }

}
