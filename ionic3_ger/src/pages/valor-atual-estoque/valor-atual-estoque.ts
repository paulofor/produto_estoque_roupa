


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { ValorAtualEstoquePageBase } from './valor-atual-estoque-base';

import { EstoqueProduto, EstoqueProdutoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-valor-atual-estoque',
  templateUrl: 'valor-atual-estoque.html'
})
export class ValorAtualEstoquePage extends ValorAtualEstoquePageBase {



  constructor(protected navCtrl: NavController, protected srv: EstoqueProdutoApi,
    protected screenshot: Screenshot) {
    super(navCtrl, srv, screenshot);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ValorAtualEstoquePage');
    this.carregaPrototipo();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ValorAtualEstoquePage');
  }
  
 

  
}
