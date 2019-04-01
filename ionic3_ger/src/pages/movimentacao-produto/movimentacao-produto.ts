


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { Produto, ProdutoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-movimentacao-produto',
  templateUrl: 'movimentacao-produto.html'
})
export class MovimentacaoProdutoPage {
  listaItem: Produto[];

  constructor(public navCtrl: NavController, public srv: ProdutoApi, 
  				 private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter MovimentacaoProdutoPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad MovimentacaoProdutoPage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: Produto[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  testaFoto() {
    this.screenshot.save('jpg', 100, 'MovimentacaoProdutoPage');
  }

  
}
