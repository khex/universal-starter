import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/subscribeOn';

import { Injectable }     from '@angular/core';
import { Http,
         Headers,
         RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { CacheService }   from './cache.service';


@Injectable()
export class ApiService {
  
  rslt: any;
  constructor(public _http: Http) { }
  
 /*  whatever domain/feature method name  */
  get(url:string, options?: any) {
    console.log('API Service');

    let headers = new Headers();
    let json = { firstName: 'Alex', secndName: 'Springres' };

    headers.append('Content-Type', 'application/json'); 
    headers.append('Body', JSON.stringify({ json }));
    
    return this._http
    //.get(url, options)
      .get(url, { headers: headers })
      .map(res => res.json())
      .catch(err => { return Observable.throw(err); })
  }

  post(url:string, data:any) {
    console.log('ApiService:', url);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
      .post(url, JSON.stringify({ data }), { headers: headers })
      .map((res) => res.json())
      .catch(err => { return Observable.throw(err); });
  }

}
