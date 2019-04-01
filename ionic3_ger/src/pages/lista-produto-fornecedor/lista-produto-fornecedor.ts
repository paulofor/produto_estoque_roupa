


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { ListaProdutoFornecedorPageBase } from './lista-produto-fornecedor-base';

import { Fornecedor, FornecedorApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-lista-produto-fornecedor',
  templateUrl: 'lista-produto-fornecedor.html'
})
export class ListaProdutoFornecedorPage extends ListaProdutoFornecedorPageBase {



  constructor(protected navCtrl: NavController, protected srv: FornecedorApi,
    protected screenshot: Screenshot) {
    super(navCtrl, srv, screenshot);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ListaProdutoFornecedorPage');
    this.carregaPrototipo();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ListaProdutoFornecedorPage');
  }
  
 

  
}
