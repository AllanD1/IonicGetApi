import { ListaProvider } from './../../providers/lista/lista';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 lista = []
  constructor(public navCtrl: NavController, private listaProvider:ListaProvider) {
    this.getlista()
  }

  getlista(){
    this.listaProvider.buscaLista().subscribe(res =>
      { 
       this.lista= JSON.parse(res['_body'])
      } 
    )
  }
  excluir(index){
    this.lista.splice(index,1)
  }
}
