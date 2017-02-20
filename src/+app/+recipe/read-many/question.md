Angular 2 Http GET with RxJS “shoots” only once

I'm playing with Angular 2 Universal Starter that share by RxJS share() operator one HttpGetSevice between multiple Components.

mainComponent >> firstService >> secondService

On init it retrieves me a list of data from backend, but on the second time it doesn't make request to the server (there is no log string about request as it was on the first time) and returns me the same data. As I understand some RxJS operators cached this response.

mainComponent.ts

    export class ReadManyComponent {
      public recipes: any[];    // recipes data   
      public page: number = 1;  // current page
      public amnt: number = 5;  // items per page

      constructor(public model: ModelService) {
        this.getRecipes(this.page, this.amnt);
      }

      getRecipes(page: number, amnt: number) {
        this.model
          .get('/api/recipes', {page: page, amount: amnt})
          .subscribe(data => {
            console.log(data);
            this.recipes = data;
        });
      }
    }
firstService.ts

    @Injectable()
    export class ModelService {

      constructor(public _api: ApiService) { }

      get(url:string, params?: any) {
        return this._api
          .get(url, params)
          .share();
      }
    }
secondService.ts

    @Injectable()
    export class ApiService {

      constructor(public _http: Http) { }

      get(url:string, params?: any) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        headers.append('Body', JSON.stringify({ params }));

        return this._http
          .get(url, { headers: headers })
          .map(res => res.json())
          .catch(err => { return Observable.throw(err); })
      }
    }