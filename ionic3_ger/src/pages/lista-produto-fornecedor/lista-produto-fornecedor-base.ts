


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { Fornecedor, FornecedorApi } from '../../shared/sdk';


export abstract class ListaProdutoFornecedorPageBase {

  protected item: Fornecedor;

  constructor(protected navCtrl: NavController, protected srv: FornecedorApi, 
  				 protected screenshot: Screenshot) {
  }

  //protected abstract getLista();
  
  protected carrega() {
    this.srv.getListaProdutoFornecedorPageLoad()
      .subscribe((result: Fornecedor) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }
  
   
  protected carregaPrototipo() {
    this.srv.getListaProdutoFornecedorPageLoad()
      .subscribe((result: Fornecedor) => {
        console.log('Result-Prototipo', JSON.stringify(result));
        this.item = result;
      });
  }
  
  protected testaFoto() {
    this.screenshot.save('jpg', 100, 'ListaProdutoFornecedorPage');
  }

  
}
