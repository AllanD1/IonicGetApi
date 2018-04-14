import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {
  url = "https://jsonplaceholder.typicode.com/posts/"
  constructor(public http: Http) {
  }
  buscaLista(){
    return this.http.get(this.url);
  }
}
