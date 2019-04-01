import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Fornecedor, FornecedorApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-cadastro-fornecedor',
  templateUrl: 'cadastro-fornecedor.html'
})
export class CadastroFornecedorPage {
  item: Fornecedor;

  constructor(public navCtrl: NavController, public srv: FornecedorApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CadastroFornecedorPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad CadastroFornecedorPage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: Fornecedor) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'CadastroFornecedorPage');
  }
  
}
