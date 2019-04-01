import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Produto, ProdutoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html'
})
export class CadastroProdutoPage {
  item: Produto;

  constructor(public navCtrl: NavController, public srv: ProdutoApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CadastroProdutoPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad CadastroProdutoPage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: Produto) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'CadastroProdutoPage');
  }
  
}
