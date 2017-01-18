import { Injectable }     from '@angular/core';
import { Http,
         Headers }        from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CacheService } from './cache.service';


@Injectable()
export class ApiService {

  constructor(public _http: Http) { }

 /*  whatever domain/feature method name  */
  get(url:string, options?: any) {
    return this._http.get(url, options)
      .map(res => res.json())
      .catch(err => {
        console.log('Error: ', err);
        return Observable.throw(err);
      });
  }

  post(url:string, data:any) {
    console.log('ApiService:', url);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
      .post(url, JSON.stringify({ data }), { headers: headers })
      .map((res) => res.json())
      .catch(err => {
        console.log('Error: ', err);
        return Observable.throw(err);
      });
  }

}
